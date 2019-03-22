// Import our Controllers
const restaurantController = require('../controllers/restaurantController')


const routes = [
  {
    method: 'GET',
    url: '/api/restaurants',
    handler: restaurantController.getRestaurants
  },
  {
    method: 'GET',
    url: '/api/restaurants/:id',
    handler: restaurantController.getSingleRestaurant
  },
  {
    method: 'POST',
    url: '/api/restaurants',
    handler: restaurantController.addRestaurant,
  },

  // PUT not working
  {
    method: 'PUT',
    url: '/api/restaurants/:id',
    handler: restaurantController.updateRestaurant
  },
  {
    method: 'DELETE',
    url: '/api/restaurants/:id',
    handler: restaurantController.deleteRestaurant
  }
]

module.exports = routes
