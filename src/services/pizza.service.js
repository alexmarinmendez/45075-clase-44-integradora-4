import PizzaModel from "../models/pizza.model.js"
import { logger } from '../logger.js'

export default class PizzaService {
    
    get = async() => {
        return await PizzaModel.find()
    }

    getById = async (id) => {
        return await PizzaModel.findById(id)
    }

    create = async (object) => {
        try {
            return await PizzaModel.create(object)
        } catch (err) {
            logger.error(err.message)
            return {}
        }
    }

    update = async (id, object) => {
        return await PizzaModel.updateOne({ _id: id }, { $set: object })
    }

    delete = async (id) => {
        return await PizzaModel.deleteOne({ _id: id })
    }
}