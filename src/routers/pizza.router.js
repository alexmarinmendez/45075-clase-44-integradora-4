import { Router } from 'express'
import PizzaController from '../controllers/pizza.controller.js'

const router = Router()
const controller = new PizzaController()

router.get('/', controller.get.bind(controller))
router.get('/:id', controller.getById.bind(controller))
router.post('/', controller.create.bind(controller))
router.put('/:id', controller.update.bind(controller))
router.delete('/:id', controller.delete.bind(controller))

export default router