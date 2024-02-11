const mongoose = require('mongoose')
const validator = require('validator')

const addressSchema = new mongoose.Schema({
    street: {
        type: String,
        required: [true, 'Street is required']
      },
      suite: {
        type: String,
        required: [true, 'Suite is required']
      },
      city: {
        type: String,
        required: [true, 'City is required'],
        validate: {
          validator: function(v) {
            return /^[a-zA-Z\s]*$/.test(v);
          },
          message: props => `${props.value} is not a valid city name!`
        }
      },
      zipcode: {
        type: String,
        required: [true, 'Zip code is required'],
        validate: {
          validator: function(v) {
            return /^\d{5}-\d{4}$/.test(v);
          },
          message: props => `${props.value} is not a valid zip code format!`
        }
      },
      geo: {
        lat: {
          type: String,
          required: [true, 'Latitude is required']
        },
        lng: {
          type: String,
          required: [true, 'Longitude is required']
        }
      }
})

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
      },
      username: {
        type: String,
        required: [true, 'Username is required'],
        minlength: [4, 'Username must be at least 4 characters long']
      },
      email: {
        type: String,
        required: [true, 'Email address is required'],
        validate: [validator.isEmail, 'Please provide a valid email address']
      },
      address: {
        type: addressSchema,
        required: [true, 'Address is required']
      }
})

const User = new mongoose.model("User", UserSchema)

module.exports = User