const Express = require('express')
const Controller = require("../controller/cliente")

const route = Express.Router()

route.post("/", (req,res,next) => Controller.post(req,res,next))
route.get("/", (req,res,next) => Controller.get(req,res,next))
route.put("/:slug", (req,res,next) => Controller.put(req,res,next))
route.delete("/:slug", (req,res,next) => Controller.deleteSlug(req,res,next))
route.get("/validar", (req,res,next) => Controller.validatePassword(req,res,next))

module.exports = {
    route
}


// "email": "email123",
// "senha": "senha123",