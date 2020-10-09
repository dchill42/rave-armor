'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable('Materials', {
        id: {
          allowNull: false,
          autoIncrement: false,
          defaultValue: Sequelize.literal('uuid_generate_v4()'),
          primaryKey: true,
          type: Sequelize.UUID
        },
        MaterialCategoryId: {
          allowNull: false,
          type: Sequelize.UUID,
          references: {
            model: 'MaterialCategories',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        PriceGroupId: {
          type: Sequelize.UUID,
          references: {
            model: 'PriceGroups',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        },
        type: {
          allowNull: false,
          type: Sequelize.STRING
        },
        supplierId: {
          allowNull: false,
          type: Sequelize.STRING
        },
        supplierCode: {
          type: Sequelize.STRING
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING
        },
        color: {
          type: Sequelize.STRING
        },
        size: {
          type: Sequelize.STRING
        },
        price: {
          allowNull: false,
          defaultValue: 0.0,
          type: Sequelize.DECIMAL
        },
        stock: {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.INTEGER
        },
        piecesPerUnit: {
          allowNull: false,
          defaultValue: 1,
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
      await queryInterface.addIndex('Materials', { fields: ['type'], transaction });
      await queryInterface.addIndex('Materials', { fields: ['supplierId'], unique: true, transaction });
      await queryInterface.addIndex('Materials', { fields: ['size'], transaction });
      await queryInterface.addIndex('Materials', { fields: ['stock'], transaction });
      await queryInterface.addIndex('Materials', { fields: ['disabled'], transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Materials');
  }
};