const conn = require('../db');

const Category = conn.define('category', {
  name: {
    type: conn.Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Category;
