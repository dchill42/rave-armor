'use strict';
const { PriceGroup } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const rBase = await PriceGroup.findOne({ where: { type: 'ring', name: 'Base' } });
    const rSteel = await PriceGroup.findOne({ where: { type: 'ring', name: 'Stainless' } });
    const rTitan = await PriceGroup.findOne({ where: { type: 'ring', name: 'Titanium' } });
    const rNiob = await PriceGroup.findOne({ where: { type: 'ring', name: 'Niobium' } });
    const rSilver = await PriceGroup.findOne({ where: { type: 'ring', name: 'Sterling' } });
    const sBase = await PriceGroup.findOne({ where: { type: 'scale', name: 'Base' } });
    const sTitan = await PriceGroup.findOne({ where: { type: 'scale', name: 'Titanium' } });
    const sPrem = await PriceGroup.findOne({ where: { type: 'scale', name: 'Premium Anodized' } });
    const sNiob = await PriceGroup.findOne({ where: { type: 'scale', name: 'Niobium' } });
    const sSilver = await PriceGroup.findOne({ where: { type: 'scale', name: 'Sterling' } });

    await queryInterface.bulkInsert('MaterialCategories', [
      {
        name: 'Anodized Aluminum Rings',
        type: 'ring',
        supplierId: '102525',
        defaultPriceGroupId: rBase.id,
        gauge: '18ga',
        size: '18ga 3/16"',
        unit: 'bag',
        piecesPerUnit: 400
      },
      {
        name: 'Niobium Rings',
        type: 'ring',
        supplierId: '102555',
        defaultPriceGroupId: rNiob.id,
        gauge: '18ga',
        size: '18ga 3/16"',
        unit: 'oz',
        piecesPerUnit: 150
      },
      {
        name: 'Titanium Rings',
        type: 'ring',
        supplierId: '102592',
        defaultPriceGroupId: rTitan.id,
        gauge: '18ga',
        size: '18ga 3/16"',
        unit: 'oz',
        piecesPerUnit: 281
      },
      {
        name: 'Bright Aluminum Rings',
        type: 'ring',
        supplierId: '103218',
        defaultPriceGroupId: rBase.id,
        gauge: '18ga',
        size: null,
        unit: 'oz',
        piecesPerUnit: null
      },
      {
        name: 'Jewelers Brass Rings',
        type: 'ring',
        supplierId: '103224',
        defaultPriceGroupId: rBase.id,
        gauge: '18ga',
        size: null,
        unit: 'oz',
        piecesPerUnit: null
      },
      {
        name: 'Bronze Rings',
        type: 'ring',
        supplierId: '103230',
        defaultPriceGroupId: rBase.id,
        gauge: '18ga',
        size: null,
        unit: 'oz',
        piecesPerUnit: null
      },
      {
        name: 'Copper Rings',
        type: 'ring',
        supplierId: '103236',
        defaultPriceGroupId: rBase.id,
        gauge: '18ga',
        size: null,
        unit: 'oz',
        piecesPerUnit: null
      },
      {
        name: 'Stainless Steel Rings - Soft Temper',
        type: 'ring',
        supplierId: '107689',
        defaultPriceGroupId: rSteel.id,
        gauge: '18ga',
        size: null,
        unit: 'oz',
        piecesPerUnit: null
      },
      {
        name: 'Stainless Steel Rings',
        type: 'ring',
        supplierId: '103248',
        defaultPriceGroupId: rSteel.id,
        gauge: '18ga',
        size: null,
        unit: 'oz',
        piecesPerUnit: null
      },
      {
        name: 'Sterling Silver Rings',
        type: 'ring',
        supplierId: '102966',
        defaultPriceGroupId: rSilver.id,
        gauge: '18ga',
        size: null,
        unit: 'oz',
        piecesPerUnit: null
      },
      {
        name: 'Engineered Plastic Scale',
        type: 'scale',
        supplierId: '105466',
        defaultPriceGroupId: sBase.id,
        gauge: null,
        size: 'small',
        unit: 'bag',
        piecesPerUnit: 100
      },
      {
        name: 'Premium Bright Anodized Aluminum Scales',
        type: 'scale',
        supplierId: '106451',
        defaultPriceGroupId: sPrem.id,
        gauge: null,
        size: 'small',
        unit: 'bag',
        piecesPerUnit: 10
      },
      {
        name: 'Bright Anodized Aluminum Scales',
        type: 'scale',
        supplierId: '106584',
        defaultPriceGroupId: sBase.id,
        gauge: null,
        size: 'small',
        unit: 'bag',
        piecesPerUnit: 100
      },
      {
        name: 'Anodized Aluminum Scales',
        type: 'scale',
        supplierId: '102624',
        defaultPriceGroupId: sBase.id,
        gauge: null,
        size: 'small',
        unit: 'bag',
        piecesPerUnit: 100
      },
      {
        name: 'Special Scales',
        type: 'scale',
        supplierId: '103209',
        defaultPriceGroupId: sBase.id,
        gauge: null,
        size: 'small',
        unit: 'bag',
        piecesPerUnit: 100
      },
      {
        name: 'Titanium Scales',
        type: 'scale',
        supplierId: '101765',
        defaultPriceGroupId: sTitan.id,
        gauge: null,
        size: 'small',
        unit: 'bag',
        piecesPerUnit: 50
      },
      {
        name: 'Niobium Scales',
        type: 'scale',
        supplierId: '104032',
        defaultPriceGroupId: sNiob.id,
        gauge: null,
        size: 'small',
        unit: 'each',
        piecesPerUnit: 1
      },
      {
        name: 'Precious Metal Scales',
        type: 'scale',
        supplierId: '105160',
        defaultPriceGroupId: sSilver.id,
        gauge: null,
        size: null,
        unit: 'each',
        piecesPerUnit: 1
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('MaterialCategories', null, {});
  }
};
