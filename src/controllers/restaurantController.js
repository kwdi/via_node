// External Dependancies
const boom = require('boom')

// Get Data Models
const Restaurant = require('../models/restaurant')

// Get all Restaurants
exports.getRestaurants = async (req, reply) => {
  try {
    const restaurants = await Restaurant.find()
    return restaurants
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single Restaurant by ID
exports.getSingleRestaurant = async (req, reply) => {
  try {
    const id = req.params.id
    const restaurant = await Restaurant.findById(id)
    return restaurant
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new Restaurant
exports.addRestaurant = async (req, reply) => {
  try {
    const restaurant = new Restaurant(req.body)
    return restaurant.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing Restaurant
// Not Working
exports.updateRestaurant = async (req, reply) => {
  try {
    const id = req.params.id
    const restaurant = req.body
    const { ...updateData } = restaurant
    const update = await Restaurant.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a Restaurant
exports.deleteRestaurant = async (req, reply) => {
  try {
    const id = req.params.id
    const restaurant = await Restaurant.findByIdAndRemove(id)
    return restaurant
  } catch (err) {
    throw boom.boomify(err)
  }
}
