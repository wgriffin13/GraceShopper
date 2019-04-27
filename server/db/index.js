const conn = require('./db');
const models = require('./models');

//Sync And Seed Function
const syncAndSeed = () => {
  return conn.sync({ force: true }).then(() => {
    //Preston you can populate your code here
  });
};

module.exports = syncAndSeed;
