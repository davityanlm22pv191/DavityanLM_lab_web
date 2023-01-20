const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: String,
    login: String,
    weight: String
})

module.exports = mongoose.model('Product', productSchema)