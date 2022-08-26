'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Produit.init({
    nom: DataTypes.STRING,
    prix: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Produit',
    timestamps: false
  });
  return Produit;
};