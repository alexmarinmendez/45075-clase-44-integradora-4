import chai from 'chai'
import supertest from 'supertest'

const expect = chai.expect
const requester = supertest('http://127.0.0.1:8080')

describe('Pizzass', () => {
    it('The endpoint POST /api/pizza must create a pizza', async () => {
        const pizza = {
            name: 'CoderPizza',
            size: 'medium',
            price: 100
        }
        const response = await requester.post('/api/pizza').send(pizza)
        const { status, ok, _body } = response
        expect (_body).to.have.property('_id')
    })
})