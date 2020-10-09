'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class MaterialCategory extends Model {
    static associate(models) {
      MaterialCategory.hasMany(models.Material);
    }
  };

  MaterialCategory.init({
    id: {
      allowNull: false,
      autoIncrement: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    type: {
      allowNull: false,
      type: DataTypes.STRING
    },
    supplierId: {
      allowNull: false,
      type: DataTypes.STRING
    },
    defaultPriceGroupId: DataTypes.UUID,
    gauge: DataTypes.STRING,
    size: DataTypes.STRING,
    unit: DataTypes.STRING,
    piecesPerUnit: DataTypes.INTEGER,
    disabled: {
      allowNull: false,
      defaultValue: false,
      type: DataTypes.BOOLEAN
    }
  }, { sequelize, modelName: 'MaterialCategory' });

  return MaterialCategory;
};