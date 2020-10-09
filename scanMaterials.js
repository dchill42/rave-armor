const Fs = require('fs');
const Https = require('https');
const Jimp = require('jimp');
const { JSDOM } = require('jsdom');

const { MaterialCategory, Material } = require('./models');

class Scanner {
  constructor() {
    this.queryUrl = 'https://theringlord.com/cart/shopquery.asp?catalogid=';
    this.redirects = 0;
    this.cookies = {};
    this.imageQuality = 90;
    this.thumbSz = 60;
    this.thumbDir = './public/images/materials';
  }

  async scanMaterials() {
    const cats = await MaterialCategory.findAll({ where: { disabled: false } });
    cats.forEach(cat => this.processDoc(cat, 'scanPage'));
  }

  async scanPage(cat, doc) {
    const sizeReg = cat.type === 'ring' ? '18 ?ga\\s+3\/16' : '[Ss]mall';
    const size = cat.type === 'ring' ? '18ga 3/16"' : 'small';
    const defCt = 10;
    const [lhead, rhead] = this.getHeaders(doc);
    const allSize = this.hasSize(lhead.childNodes[0], sizeReg);
    const allPrice = this.getPrice(rhead);
    const inputs = this.getInputs(doc);

    inputs.forEach(async (i) => {
      const blurb = i.parentElement.nextSibling;
      if (!allSize && !this.hasSize(blurb.querySelector('.txtheaderlarge'), sizeReg)) return;

      const info = this.getInfoBlocks(i);
      let color, stock, price, piecesPerUnit;

      if (info.length) {
        color = cat.type === 'ring' ? null : this.getColor(blurb);
        stock = this.getStockCt(info[0], defCt);
        price = this.getPrice(info[1]);
        piecesPerUnit = this.getPiecesPerUnit(info[0], cat.piecesPerUnit);
      } else {
        color = this.getColor(blurb);
        stock = this.getStockCt(blurb, defCt);
        price = allPrice;
        piecesPerUnit = cat.piecesPerUnit;
      }

      const supplierId = this.inputId(i);
      const mat = await Material.findOne({ where: { supplierId } });
      if (!mat) {
        const supplierCode = this.getSupplierCode(blurb);
        console.log(`Adding new material ${supplierId}`);
        await Material.create({
          MaterialCategoryId: cat.id,
          PriceGroupId: cat.defaultPriceGroupId,
          type: cat.type,
          supplierId,
          supplierCode,
          name: cat.name,
          color,
          size,
          price,
          stock,
          piecesPerUnit
        });
      } else if (mat.price !== price || mat.stock !== stock) {
        console.log(`Updating material ${supplierId}`);
        await mat.update({ price, stock });
      }
    });
  }

  processDoc(cat, procname) {
    this.fetchUrl(`${this.queryUrl}${cat.supplierId}`, (body, statusCode) => {
      if (statusCode >= 300) return this.onError(`Status: ${statusCode}`);
      const doc = new JSDOM(body).window.document;
      this[procname](cat, doc);
    });
  }

  fetchUrl(url, onEnd) {
    Https.get(url, this.buildCookies(), (res) => {
      this.saveCookies(res);
      if (Math.trunc(res.statusCode / 100) === 3) return this.handleRedirect(url, res, onEnd);

      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => { onEnd(body, res.statusCode); });
      res.on('error', (err) => { this.onError(err) });
    }).end();
  }

  saveImage(url, path) {
    Jimp.read(url).then(i => {
      const w = i.getWidth();
      const h = i.getHeight();
      if (!(w > 0 && h > 0)) {
        this.onError(`Bad size for ${url} - not saving ${path}`);
        return;
      }

      const x = Math.trunc((w - this.thumbSz) / 2);
      const y = Math.trunc((h - this.thumbSz) / 2);
      return i.crop(x, y, this.thumbSz, this.thumbSz).quality(this.imageQuality).write(path);
    });
  }

  private

  getHeaders(doc) {
    return doc.querySelectorAll('.main-product .productheaderrow .productheaderrow');
  }

  getInputs(doc) {
    return doc.querySelectorAll('.main-product input[type="text"]');
  }

  getInfoBlocks(input) {
    return input.parentElement.parentElement.querySelectorAll('.desktop-only');
  }

  hasSize(block, exp) {
    return new RegExp(exp).exec(block.textContent);
  }

  getColor(info) {
    return info.querySelector('.txtheaderlarge').textContent.match(/^[^*-]+/)[0].trim();
  }

  getSupplierCode(info) {
    return info.querySelector('.txtsizesmall').textContent;
  }

  getStockCt(info, backup) {
    const stock = this.getLabelSaying('Stock', info);
    return stock ? parseInt(stock.nextSibling.textContent.match(/\d+/)) : backup;
  }

  getPiecesPerUnit(info, backup) {
    const pieces = this.getLabelSaying('per', info);
    return pieces ? pieces.textContent.match(/\d+/) : backup;
  }

  getLabelSaying(word, info) {
    const labels = info.querySelectorAll('.txtorange');
    let found = null;
    if (labels.length) labels.forEach(l => { if (l.textContent.includes(word)) found = l; });
    return found;
  }

  getPrice(info) {
    const matches = info.childNodes[0].textContent.match(/US\$([\d.]+)/);
    return matches ? parseFloat(matches[1]) : null;
  }

  inputId(input) {
    return input.getAttribute('name').match(/_(\d+)/)[1];
  }

  buildCookies() {
    if (!Object.keys(this.cookies).length) return {};
    const value = Object.entries(this.cookies).map(([k, v]) => `${k}=${v}`).join('; ');
    return { headers: { 'Cookie': value } };
  }

  saveCookies(res) {
    if (!res.headers['set-cookie']) return;
    [].concat(res.headers['set-cookie']).forEach(c => {
      const [_, key, value] = c.match(/^([^;=]+)=([^;]+);/);
      this.cookies[key] = value;
    });
  }

  handleRedirect(url, res, onEnd) {
    const loc = res.headers.location;
    if (!loc) return this.onError('Redirect without location');
    if (this.redirects >= 5) return this.onError('Too many redirects');

    const newUrl = new URL(loc, url);
    this.redirects += 1;
    this.fetchUrl(newUrl, onEnd);
    this.redirects -= 1;
  }

  onError(err) {
    console.error(err);
  }
}

const scanner = new Scanner();
scanner.scanMaterials();
