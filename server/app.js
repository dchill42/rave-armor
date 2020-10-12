const express = require('express');
const sassMiddleware = require('node-sass-middleware');
const app = express();
const port = 3001;

app.use(sassMiddleware({ src: './src/scss', dest: './public/css', prefix: '/css' }));
app.use(express.static('public'));
app.use('/', express.static('./pages', { index: 'home.html' }));
app.use('/masks', express.static('./pages', { index: 'masks.html' }));
app.use('/garments', express.static('./pages', { index: 'garments.html' }));
app.use('/about', express.static('./pages', { index: 'about.html' }));
app.use('/account', express.static('./pages', { index: 'account.html' }));

app.listen(port, () => console.log(`RaveArmor listening on port ${port}`));
