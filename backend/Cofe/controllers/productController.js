//External Dependancies
const boom = require('boom')

// Get Data Models
const Product = require('../models/Product')

// Get all cars
exports.getProducts = async (req, reply) => {
    try {
        const products = await Product.find()
        return products
        reply.header("Access-Control-Allow-Methods", "POST");
    } catch (err) {
        throw boom.boomify(err)
    }z
}

// Get single car by ID
exports.getSingleProduct = async (req, reply) => {
    try {
        const id = req.params.id
        const product = await Product.findById(id)
        return product
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Add a new car
exports.addProduct = async (req, reply) => {
    try {
        const product = new Product(req.body)
        return product.save()
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Update an existing car
exports.updateProduct = async (req, reply) => {
    try {
        const id = req.params.id
        const product = req.body
        const { ...updateData } = product
        const update = await Product.findByIdAndUpdate(id, updateData, { new: true })
        return update
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Delete a car
exports.deleteProduct = async (req, reply) => {
    try {
        const id = req.params.id
        const product = await Product.findByIdAndRemove(id)
        return product
    } catch (err) {
        throw boom.boomify(err)
    }
}