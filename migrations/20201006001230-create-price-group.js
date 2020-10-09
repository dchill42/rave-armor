'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable('PriceGroups', {
        id: {
          allowNull: false,
          autoIncrement: false,
          defaultValue: Sequelize.literal('uuid_generate_v4()'),
          primaryKey: true,
          type: Sequelize.UUID
        },
        type: {
          allowNull: false,
          type: Sequelize.STRING
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING
        },
        priceAdd: {
          allowNull: false,
          type: Sequelize.DECIMAL
        },
        depositAdd: {
          allowNull: false,
          type: Sequelize.DECIMAL
        },
        createdAt: {
          allowNull: false,
          defaultValue: Sequelize.literal('now()'),
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          defaultValue: Sequelize.literal('now()'),
          type: Sequelize.DATE
        }
      }, { transaction });
      await queryInterface.addIndex('PriceGroups', { fields: ['type'], transaction });
      await queryInterface.addIndex('PriceGroups', { fields: ['priceAdd'], transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw error
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PriceGroups');
  }
};