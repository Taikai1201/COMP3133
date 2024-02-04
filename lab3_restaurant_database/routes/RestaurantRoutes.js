const express = require('express')
const resModel = require('../models/Restaurant')
const Restaurant = require('../models/Restaurant')
const routes = express.Router()


// 4
routes.get('/', async (req, res) => {
    try {
      const resList = await resModel.find({});
      res.status(200).json({
        "emp": resList
      });
    } catch (error) {
      res.json(error);
    }
  });
  
  

// 5
routes.get('/cuisine/:cuisine', async (req, res) => {
    try {
      const cuisine = new RegExp(req.params.cuisine, 'i');
      const restaurants = await Restaurant.find({ cuisine });
      res.status(200).json(restaurants);
    } catch (error) {
      res.json(error);
    }
  });

// 6
routes.get('/', async (req, res) => {
    try{
        const sort = req.query.sortBy === 'DESC' ? -1 : 1;
        const restaurant = await Restaurant.find().select('id cuisine name city restaurant_id').sort({restaurant_id: sort})

        res.json(restaurant)
    }catch(err){
        console.log(err)
    }
})

// 7

routes.get('/:cuisine', async (req, res) => {
    try {
      const cuisine = req.params.cuisine;
      const sortOrder = 1;  
  
      const exclude = {
        cuisine: cuisine,
        city: { $ne: 'Brooklyn' }  
      };
      
      const filter = { _id: 0, cuisine: 1, name: 1, city: 1 };
      const restaurants = await Restaurant.find(exclude).select(filter).sort({ name: sortOrder });
  
      res.json(restaurants);
    } catch (err) {
      console.error(err);
      res.status(500).json({error});
    }
  });
  








module.exports = routes