import mongoose from "mongoose";
import chai from 'chai'
import PizzaService from "../../src/services/pizza.service.js"

mongoose.connect('mongodb://localhost:27017', { dbName: 'integrdora4' })
const service = new PizzaService()
const expect = chai.expect

describe('test CRUD of Pizza Service', () => {
    // before(async function() {
    //     await mongoose.connection.db.dropCollection('pizzas', () => {
    //         console.log('collection dropped!')
    //     })
    // })
    it('Must return all pizzas', async () => {
        const result = await service.get()
        expect(result).to.be.deep.equal([])
    })

    it('Must create a new pizza', async () => {
        const result = await service.create({
            name: 'CoderPizza',
            size: 'medium',
            price: 100
        })
        expect(result).to.have.property('_id')
    })
})