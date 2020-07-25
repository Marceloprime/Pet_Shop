const { query } = require("express")

const Cliente = require("../model/cliente").model

const post = (req,res,next) => {
    const produto = new Cliente(req.body)
    produto
    .save()
    .then(() => res.status(201).send({ message: "Cliente cadastrado com sucesso" }))
    .catch(e => res.status(400).send({ message:"Falha ao cadastrar cliente", data: e }))
}

const get = (req,res,next) => {
    const query = {}
    if(req.body.nome) query.nome = req.body.nome
    if(req.body.cpf) query.cpf = req.body.cpf
    if(req.body.cidade) query.cidade = req.body.cidade
    if(req.body.estado) query.estado = req.body.estado
    if(req.params.cep) query.cep = req.body.cep

    Cliente.find(query)
    .then(data => res.status(200).send(data))
    .catch(e => res.status(400).send({ message: "Falha na busca", data:e }))
}

const put = (req,res,next) => {
    const filter = { slug:req.params.slug }
    const update = req.body
    Produto.findOneAndUpdate(filter, update)
    .then(() => res.staus(200).send({ message:"Cliente atualizado com sucesso" }))
    .catch(
        (e) => res.send(400).status({ message: "Falha ao atualizar o cliente", data: e })
    )
}

const deleteSlug = (req,res,next) => {
    const filter = { slug: req.params.slug }
    Produto.findOneAndRemove(filter)
    .then(_ => res.status(200).send({ message:"Cliente removido com sucesso" }))
    .catch(e => res.status(400).send({ message:"Falha ao remover cliente", data:e }))
}

const validatePassword = (req,res,next) => {
    Cliente.findOne({ email:req.body.email })
    .then(value => {
        const valido = value.senha == req.body.senha
        let msg = ""
        if(valido){
            msg = `Bem vindo ${value.nome}`
        }
        else msg = "Informações incorretas"

        res.status(200).send({ message: msg, data: valido }
        )
    })
    .catch(e => res.status(400).send({ message: "Erro na validação", data: e }))
}

module.exports = {
    post,
    get,
    put,
    deleteSlug,
    validatePassword
}