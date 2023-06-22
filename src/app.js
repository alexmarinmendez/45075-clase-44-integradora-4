import express from 'express'
import router from './routers/pizza.router.js'
import mongoose from 'mongoose'
import { loggerHttp } from './logger.js'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUiExpress from 'swagger-ui-express'
import __dirname from './utils.js'

const specs = swaggerJSDoc({
    definition: {
        openapi: '3.0.1',
        info: {
            title: 'Documentación de la API de Pizzas',
            description: 'Details'
        }
    },
    apis: [`${__dirname}/../docs/**/*.yaml`]
})

const app = express()
app.use(express.json())
app.use(loggerHttp)

app.use('/doc', swaggerUiExpress.serve, swaggerUiExpress.setup(specs))
app.use('/api/pizza', router)
app.use('/', (req, res) => res.json({ status: 'ok' }))

try {
    await mongoose.connect('mongodb://127.0.0.1:27017', { dbName: 'integradora4' })
    app.listen(8080, () => console.log('Server Up!'))
} catch(err) {
    console.log(err.message)
}
