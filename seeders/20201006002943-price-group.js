'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('PriceGroups', [
      {
        type: 'ring',
        name: 'Base',
        priceAdd: 0.0,
        depositAdd: 0.0
      },
      {
        type: 'ring',
        name: 'Stainless',
        priceAdd: 30.0,
        depositAdd: 10.0
      },
      {
        type: 'ring',
        name: 'Titanium',
        priceAdd: 60.0,
        depositAdd: 30.0
      },
      {
        type: 'ring',
        name: 'Niobium',
        priceAdd: 120.0,
        depositAdd: 80.0
      },
      {
        type: 'ring',
        name: 'Sterling',
        priceAdd: 240.0,
        depositAdd: 180.0
      },
      {
        type: 'scale',
        name: 'Base',
        priceAdd: 0.0,
        depositAdd: 0.0
      },
      {
        type: 'scale',
        name: 'Titanium',
        priceAdd: 40.0,
        depositAdd: 20.0
      },
      {
        type: 'scale',
        name: 'Clear',
        priceAdd: 60.0,
        depositAdd: 30.0
      },
      {
        type: 'scale',
        name: 'Premium Anodized',
        priceAdd: 100.0,
        depositAdd: 50.0
      },
      {
        type: 'scale',
        name: 'Niobium',
        priceAdd: 280.0,
        depositAdd: 160.0
      },
      {
        type: 'scale',
        name: 'Gold',
        priceAdd: 340.0,
        depositAdd: 200.0
      },
      {
        type: 'scale',
        name: 'Sterling',
        priceAdd: 480.0,
        depositAdd: 300.0
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('PriceGroups', null, {});
  }
};
