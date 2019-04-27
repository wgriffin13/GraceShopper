const Product = require('./product');
const Category = require('./category');

Category.hasMany(Product);
Product.belongsTo(Category);

module.exports = {
  Product,
  Category,
};
