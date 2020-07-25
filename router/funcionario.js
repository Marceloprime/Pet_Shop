const Express = require('express')
const Controller = require("../controller/funcionario")

const route = Express.Router()

route.post('/', (req,res,next) => Controller.post(req,res,next))
route.get('/', (req,res,next) => Controller.get(req,res,next))

module.exports = {
    route
}