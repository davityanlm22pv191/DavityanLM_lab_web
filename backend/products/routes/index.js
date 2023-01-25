// Import our Controllers
const productController = require('../controllers/productController')

const routes = [
    {
        method: 'GET',
        url: '/api/products',
        handler: productController.getProducts
    },
    {
        method: 'GET',
        url: '/api/products/:id',
        handler: productController.getSingleProduct
    },
    {
        method: 'POST',
        url: '/api/products',
        handler: productController.addProduct,
        schema: productController.addProductSchema
    },
    {
        method: 'PUT',
        url: '/api/products/:id',
        handler: productController.updateProduct
    },
    {
        method: 'DELETE',
        url: '/api/products/:id',
        handler: productController.deleteProduct
    }
]

module.exports = routes