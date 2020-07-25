const Express = require('express')
const Controller = require("../controller/index")

const route = Express.Router()

route.get('/', (req,res,next) => Controller.get(req,res,next))

/*
GET: Recuperar informações
POST: Inserir informações
PUT: Atualizar informações
DELETE: Deletar informações
*/

module.exports = {
    route
}