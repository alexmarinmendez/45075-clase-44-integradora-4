import express from 'express'
import router from './routers/pizza.router.js'
import mongoose from 'mongoose'
import { loggerHttp } from './logger.js'

const app = express()
app.use(express.json())
app.use(loggerHttp)

app.use('/api/pizza', router)
app.use('/', (req, res) => res.json({ status: 'ok' }))

try {
    await mongoose.connect('mongodb://127.0.0.1:27017', { dbName: 'integradora4' })
    app.listen(8080, () => console.log('Server Up!'))
} catch(err) {
    console.log(err.message)
}
