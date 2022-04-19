const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    middleName:{
        type: String,
    },
    surname:{
        type: String,
        required: true
    },
    secondSurname:{
        type: String
    },
    email:{
        type: String,
        required: true,
        trim: true
    },
    date:{
        type: String,
        required: true   
    },
    time:{  
        type: String,
        required: true
    },
    contactNumber:{
        type: Number,
        required: true
    },
    place:{
        type: String,
        required: true
    },
    linkedin:{
        type: String
    }
});

const FormModel = mongoose.model("forms", FormSchema);

module.exports = FormModel