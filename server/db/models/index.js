const Product = require('./product');
const Category = require('./category');
const User = require('./User')

Category.hasMany(Product);
Product.belongsTo(Category);


module.exports = {
  Product,
  Category,
  User
};
