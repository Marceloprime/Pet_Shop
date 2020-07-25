const Venda = require("../model/venda").model

const post = (req,res,next) => {
    const venda = new Venda(req.body)
    venda
    .save()
    .then(() => { 
        res.status(201).send({ message:"Venda cadastrada com sucesso", data:venda }) 
    })
    .catch(e => { 
        res.status(400).send({ message:"Falha no cadastro da venda", data:e }) 
    })
}

const get = (req,res,next) => {
    const query = {}
    if(req.body.cpfCliente) query.cpfCliente = req.body.cpfCliente
    if(req.body.slug) query.slug = req.body.slug
    if(req.body.data) query.data = data
    
    Venda
    .find(query)
    .then(results => { 
        res.status(200).send({ message: "Busca bem sucedida", data: results })
    })
    .catch(e => { 
        res.status(400).send({ message: "Falha na busca", data: e }) 
    })
}

module.exports = {
    post,
    get
}