const Sequelize = require ('sequelize');
const restaurantModel = require('./models/restaurant');


//1) db name 2) user 3) password 4) Objeto conf
const sequelize = new Sequelize('melp','root','abcd1234', {
  host:'localhost',//Direccion de nuestro RDBMS
  dialect:'mysql'
});

const Restaurant = restaurantModel(sequelize, Sequelize);

sequelize.sync({
  force: true
}).then(()=>{
  console.log("database updated successfully");
});

module.exports = {
  Restaurant
};
