const Express = require('express')
const Controller = require("../controller/produto")

const route = Express.Router()
route.get("/", (req,res,next) => Controller.get(req,res,next) )
route.get("/:slug", (req,res,next) => Controller.getSlug(req,res,next))
route.post("/", (req,res,next) => Controller.post(req,res,next))
route.put("/:slug", (req,res,next) => Controller.putSlug(req,res,next))
route.delete("/:slug", (req,res,next) => Controller.deleteSlug(req,res,next))

module.exports = {
    route
}