## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm start
```
## Dependencies
    "boom": "^7.2.2",
    "fastify": "^1.13.0",
    "fastify-mongodb": "^0.9.1",
    "fastify-swagger": "^0.15.3",
    "mongoose": "^5.3.14",
    "nodemon": "^1.18.7"

## Features completed
    An endpoint that lets the client get a list of all restaurants
    An endpoint that lets the client get more info on a single restaurant
    An endpoint that accepts a POST request to add new restaurants to the DB
    Functionality to delete restaurants from the DB through the API

## Features attempted
    Functionality to update restaurants from the DB through the API

## Tests
    Tested GET, GET(one), DELETE, PUSH with POSTMAN
    (screenshots from postman inside the sceenshot folder)

    4 self-contained tests exist in the main folder.
    testGetall.js and testGetone.js working

``` bash
#GET all
node testGetall.js

#GET one
node testGetone.js
```
