'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable('MaterialCategories', {
        id: {
          allowNull: false,
          autoIncrement: false,
          defaultValue: Sequelize.literal('uuid_generate_v4()'),
          primaryKey: true,
          type: Sequelize.UUID
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING
        },
        type: {
          allowNull: false,
          type: Sequelize.STRING
        },
        supplierId: {
          allowNull: false,
          type: Sequelize.STRING
        },
        defaultPriceGroupId: {
          type: Sequelize.UUID
        },
        gauge: {
          type: Sequelize.STRING
        },
        size: {
          type: Sequelize.STRING
        },
        unit: {
          type: Sequelize.STRING
        },
        piecesPerUnit: {
          type: Sequelize.INTEGER
        },
        disabled: {
          allowNull: false,
          defaultValue: 'FALSE',
          type: Sequelize.BOOLEAN
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
      await queryInterface.addIndex('MaterialCategories', { fields: ['type'], transaction });
      await queryInterface.addIndex('MaterialCategories', { fields: ['supplierId'], unique: true, transaction });
      await queryInterface.addIndex('MaterialCategories', { fields: ['disabled'], transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('MaterialCategories');
  }
};