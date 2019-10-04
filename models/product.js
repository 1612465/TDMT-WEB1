'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    summery: DataTypes.TEXT,
    decripsion: DataTypes.TEXT,
    price: DataTypes.DECIMAL
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
    Product.hasMany(models.Comment);
  };
  return Product;
};