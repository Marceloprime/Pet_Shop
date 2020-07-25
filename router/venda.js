const Express = require('express')
const Controller = require("../controller/venda")

const route = Express.Router()
route.get("/", (req,res,next) => Controller.get(req,res,next) )
route.post("/", (req,res,next) => Controller.post(req,res,next))

module.exports = {
    route
}