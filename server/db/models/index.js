const Product = require('./product');
const Category = require('./category');
const Order = require('./order');
const LineItem = require('./lineitem');

Category.hasMany(Product);
Product.belongsTo(Category);
Product.hasMany(LineItem);
LineItem.belongsTo(Product);
LineItem.belongsTo(Order);
Order.hasMany(LineItem);

module.exports = {
  Product,
  Category,
  LineItem,
  Order
};
