const express = require('express');
const { Restaurant } = require('../db');

//RESTFULL => GET, POST, PATCH, DELETE

function list(req, res, next) {
  Restaurant.findAll({})
          .then(objects => res.json(objects))
          .catch(err => res.send(err));
}

function index(req, res, next){
  const id = req.params.id;
  Restaurant.findByPk(id)
          .then(object => res.json(object))
          .catch(err => res.send(err));
}

function create(req, res, next){
  const id = req.body.id;
  const rating = req.body.rating;
  const name = req.body.name;
  const site = req.body.site;
  const email = req.body.email;
  const phone = req.body.phone;
  const street = req.body.street;
  const city = req.body.city;
  const state = req.body.state;
  const lat = req.body.lat;
  const lng = req.body.lng;


  let restaurant = new Object({
    id:id,
    rating:rating,
    name:name,
    site:site,
    email:email,
    phone:phone,
    street:street,
    city:city,
    state:state,
    lat:lat,
    lng:lng
  });

  Restaurant.create(restaurant)
          .then(obj => res.json(obj))
          .catch(err => res.send(err));
}

function replace(req, res, next){
  const id = req.params.id;
  Restaurant.findByPk(id)
          .then((object) => {
            const id = req.body.id ? req.body.id : "";
            const rating = req.body.rating ? req.body.rating : "";
            const name = req.body.name ? req.body.name : "";
            const site = req.body.site ? req.body.site : "";
            const email = req.body.email ? req.body.email : "";
            const phone = req.body.phone ? req.body.phone : "";
            const street = req.body.street ? req.body.street : "";
            const city = req.body.city ? req.body.city : "";
            const state = req.body.state ? req.body.state : "";
            const lat = req.body.lat ? req.body.lat : "";
            const lng = req.body.lng ? req.body.lng : "";
            object.update({id:id, rating:rating, name:name, site:site, email:email, phone:phone, street:street, email:email, phone:phone, street:street, city:city, state:state, lat:lat, lng:lng})
                  .then(restaurant => res.json(restaurant));
          })
          .catch(err => res.send(err));
}

function edit(req, res, next){
  const id = req.params.id;
  Restaurant.findByPk(id)
          .then((object) => {
            const id = req.body.id ? req.body.id : object.id;
            const rating = req.body.rating ? req.body.rating : object.rating;
            const name = req.body.name ? req.body.name : object.name;
            const site = req.body.site ? req.body.site : object.site;
            const email = req.body.email ? req.body.email : object.email;
            const phone = req.body.phone ? req.body.phone : object.phone;
            const street = req.body.street ? req.body.street : object.street;
            const city = req.body.city ? req.body.city : object.city;
            const state = req.body.state ? req.body.state : object.state;
            const lat = req.body.lat ? req.body.lat : object.lat;
            const lng = req.body.lng ? req.body.lng : object.lng;
            object.update({id:id, rating:rating, name:name, site:site, email:email, phone:phone, street:street, email:email, phone:phone, street:street, city:city, state:state, lat:lat, lng:lng})
                  .then(restaurant => res.json(restaurant));
          })
          .catch(err => res.send(err));
}

function destroy(req, res, next){
  const id = req.params.id;
  Restaurant.destroy({ where:{id:id} })
          .then(obj => res.json(obj))
          .catch(err => rest.send(err));
}

module.exports={
  list, index, create, replace, edit, destroy
}
