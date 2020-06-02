const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        minlength:2,
        maxlength: 300,
        required: true
    },
    password: {
        type: String,
        minlength:2,
        maxlength: 300,
        required: true
    }
})


module.exports = mongoose.model('User', userSchema)









