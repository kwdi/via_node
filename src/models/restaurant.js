// External Dependancies
const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
  opening_hours: String,
  address: String,
  phone_number: String,
  location: {
    lat: String,
    lng: String
  },
  icon: String,
  name: String,
  price_lvl: Number,
  Rating: Number,
  google_maps_url: String,
  website: String,
  photo: String,
  id: Number,
//  services: {
//    type: Map,
//    of: String
//  }
})

module.exports = mongoose.model('Restaurant', restaurantSchema)
