const Produto = require("../model/produto").model

const post = (req,res,next) => {
    const produto = new Produto(req.body)
    produto
    .save()
    .then(() => res.status(201).send({ message: "Produto cadastrado com sucesso" }))
    .catch(e => res.status(400).send({ message:"Falha ao cadastrar produto", data: e }))
}

const get = (req,res,next) => {
    let query = { ativo:true }
    if(req.body.tags) query.tags = req.body.tags

    Produto.find(query)
    .then(data => res.status(200).send(data))
    .catch(e => res.status(400).send({ message: "Falha na busca", data: e }))
}

const getSlug = (req,res,next) => {
    Produto.findOne({ slug:req.params.slug, ativo:true })
    .then(data => res.status(200).send(data))
    .catch(e => res.status(400).send({ message: "Falha na busca", data: e }))
}

const putSlug = (req,res,next) => {
    const filter = { slug:req.params.slug }
    const update = req.body
    Produto.findOneAndUpdate(filter, update)
    .then(() => res.staus(200).send({ message:"Produto atualizado com sucesso" }))
    .catch(
        (e) => res.send(400).status({ message: "Falha ao atualizar o produto", data: e })
    )
}

const deleteSlug = (req,res,next) => {
    const filter = { slug: req.params.slug }
    Produto.findOneAndRemove(filter)
    .then(_ => res.status(200).send({ message:"Produto removido com sucesso" }))
    .catch(e => res.status(400).send({ message:"Falha ao remover produto", data:e }))
}

module.exports = {
    post,
    get,
    getSlug,
    putSlug,
    deleteSlug
}