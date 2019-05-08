const conn = require("../db");

const ProductReview = conn.define("productreview", {
  rating: {
    type: conn.Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    },
    review: conn.Sequelize.TEXT
  }
});

module.exports = ProductReview;
