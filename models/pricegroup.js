'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PriceGroup extends Model {
    static associate(models) {
      PriceGroup.hasMany(models.Material);
    }
  };

  PriceGroup.init({
    id: {
      allowNull: false,
      autoIncrement: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID
    },
    type: {
      allowNull: false,
      type: DataTypes.STRING
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    priceAdd: {
      allowNull: false,
      type: DataTypes.DECIMAL
    },
    depositAdd: {
      allowNull: false,
      type: DataTypes.DECIMAL
    }
  }, { sequelize, modelName: 'PriceGroup' });

  return PriceGroup;
};