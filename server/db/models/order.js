const conn = require('../db');
const Sequelize = require('sequelize');

const Order = conn.define('order', {
    status: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isIn: [['pending', 'purchased', 'cancelled', 'shipped', 'delivered']]
        }
    }
});

module.exports = Order;
