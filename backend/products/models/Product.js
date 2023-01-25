const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: String,
    login: String,
    age: Number
})

module.exports = mongoose.model('Product', productSchema)