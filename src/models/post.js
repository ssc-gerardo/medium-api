const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength:2,
        maxlength: 300,
        required: true
    },
    image: {
        type: String,
        minlength:2,
        maxlength: 500,
        required: true
    },
    description:{
        type: String,
        minlength:2,
        maxlength: 500,
        required: true
    },
    author:{
        type: String,
        minlength:2,
        maxlength: 500,
        required: true
    },
    category:{
        type: String,
        minlength:2,
        maxlength: 50,
        required: true
    },
    readtime:{
        type: Number
    },
    date:{
        type: String
    }
})


module.exports = mongoose.model('Post', postSchema)