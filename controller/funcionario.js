const Mongoose = require('mongoose')
const Funcionario = require("../model/funcionario").model

const post = (req,res,next) => {
    const funcionario = new Funcionario(req.body)
    funcionario.save().then(() => {
        res.status(201).send({ message: "Funcionario cadastrado com sucesso" })
    }).catch(e => {
        res.status(400).send({ message:"Falha ao cadastrar produto", data: e })
    })
}

const get = (req,res,next) => {
    const query = {}
    if(req.body.id) query.id = req.body.id 
    if(req.body.cpf) query.cpf = req.body.cpf
    if(req.body.nome) query.nome = req.body.nome

    Funcionario.find(query).then(
        data => { res.status(200).send(data) }
    ).catch(
        e => { res.status(400).send({ message: "Falha na busca", data: e }) }
    )
}

//TODO Update/put e Delete

module.exports = {
    post,
    get
}