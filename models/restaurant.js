/*model schema for restaurants table*/

module.exports = (sequelize, type) => {
  const Restaurant = sequelize.define('restaurants',{
    id: {type: type.STRING, primaryKey:true, autoIncrement:false},
    rating: type.INTEGER,
    name: type.TEXT,
    site: type.TEXT,
    email: type.TEXT,
    phone: type.TEXT,
    street: type.TEXT,
    city: type.TEXT,
    state: type.TEXT,
    lat: type.FLOAT,
    lng: type.FLOAT
  });

  return Restaurant;
}
