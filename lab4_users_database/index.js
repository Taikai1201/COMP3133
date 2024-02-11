const express = require('express')
const mongoose = require('mongoose')

const userRouter = require('./routes/UserRoutes')

const app = express()
app.use(express.json())

const DB_CONNECTION_STRING = "mongodb+srv://vudangdaiduong:Taikai1201@assignment1.ij06984.mongodb.net/Users?retryWrites=true&w=majority";

mongoose.connect(DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(sucess => {
    console.log("Success connection to MongoDB !")
}).catch(err => {
    console.log('Error connecting to MongoDB')
});

app.use(userRouter)

app.listen(3000, () => {console.log("Server is running at http://localhost:3000")})