const Product = require("./product");
const Category = require("./category");
const User = require("./User");
const Order = require("./order");
const LineItem = require("./lineitem");

Category.hasMany(Product);
Product.belongsTo(Category);
Product.hasMany(LineItem);
LineItem.belongsTo(Product);
LineItem.belongsTo(Order);
Order.hasMany(LineItem);
Order.belongsTo(User);
User.hasMany(Order);

module.exports = {
  Product,
  Category,
  User,
  LineItem,
  Order
};
