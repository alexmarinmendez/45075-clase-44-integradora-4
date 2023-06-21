import mongoose from 'mongoose'

const PizzaModel = mongoose.model('pizzas', new mongoose.Schema({
    name: { type: String, required: true },
    size: String,
    price: Number
}))

export default PizzaModel