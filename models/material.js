'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Material extends Model {
    static associate(models) {
      Material.belongsTo(models.MaterialCategory);
      Material.belongsTo(models.PriceGroup);
    }
  };

  Material.init({
    id: {
      allowNull: false,
      autoIncrement: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID
    },
    MaterialCategoryId: {
      allowNull: false,
      type: DataTypes.UUID
    },
    PriceGroupId: DataTypes.UUID,
    type: {
      allowNull: false,
      type: DataTypes.STRING
    },
    supplierId: {
      allowNull: false,
      type: DataTypes.STRING
    },
    supplierCode: DataTypes.STRING,
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    color: DataTypes.STRING,
    size: DataTypes.STRING,
    price: {
      allowNull: false,
      defaultValue: 0.0,
      type: DataTypes.DECIMAL
    },
    stock: {
      allowNull: false,
      defaultValue: 0,
      type: DataTypes.INTEGER
    },
    piecesPerUnit: {
      allowNull: false,
      defaultValue: 1,
      type: DataTypes.INTEGER
    },
    disabled: {
      allowNull: false,
      defaultValue: false,
      type: DataTypes.BOOLEAN
    }
  }, { sequelize, modelName: 'Material' });

  return Material;
};