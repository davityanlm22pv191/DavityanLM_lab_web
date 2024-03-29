const mongoose = require('mongoose')

const routes = require('./routes')

// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true
})

// Declare a route
fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
})

// Run the server!
const start = async () => {
    try {
        await fastify.listen(3000, '0.0.0.0')
        fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }

}
routes.forEach((route, index) => {
    fastify.route(route)
})


mongoose.connect('mongodb+srv://termyter:123zxc@cluster0.0b0qa3d.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('MongoDB connected…'))
    .catch(err => console.log(err))

start()
