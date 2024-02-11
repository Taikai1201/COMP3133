const express = require('express')
const Users = require('../models/Users')
const routes = express.Router()

routes.post("/users", async (req, res) => {
    try{
        const newUser = new Users({
            ...req.body
        })
        await newUser.save()

        res.json("New user has been added!")

    }catch(err){
        console.log(err)
    } 
})

module.exports = routes