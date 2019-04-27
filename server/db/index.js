const Product = require('./models/product');
const Category = require('./models/category');
const { seedCategories, seedProducts } = require('./seed');
const conn = require('./db');

const syncAndSeed = () => {
  return conn
    .sync({ force: true })
    .then(() => {
      seedCategories.map(cat => Category.create(cat));
    })
    .then(() => {
      seedProducts.map(prod => Product.create(prod));
    })
    .catch(error => {
      throw error;
    });
};

module.exports = syncAndSeed;
