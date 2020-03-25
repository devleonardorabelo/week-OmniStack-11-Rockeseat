const express = require('express')
const routes = express.Router()

routes.get('/', (request, response) => {
    response.json({
        text: 'Hello world'
    })
})

module.exports = routes