//dotenv
require('dotenv').config()
// importing express
const express = require('express');
const app = express();
//import mongoose
const mongoose = require('mongoose');
const FormModel = require('./models/Form')
//allows to connect with the frontend
const cors = require('cors')
app.use(cors())
//send data as json 
app.use(express.json());
//port
const PORT = process.env.PORT || 3005

const URI = process.env.MONGODB_URI

mongoose.connect(URI);


//routes
app.use('/forms', require('./routes/forms.route'))

//connection with specified port
app.listen(PORT, () => {
    console.log("Server is working in " + PORT)
});