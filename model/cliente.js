const Mongoose = require("mongoose")
const Schema = Mongoose.Schema

const schema = new Schema({
    nome: { type:String, required:true },
    cpf: { type:String, required:true, unique:true, index:true },
    rua: { type:String, required:true },
    logradouro: { type:String, required:true },
    cidade: { type:String, required:true },
    estado: { type:String, required:true },
    cep: { type:String, required:true },
    email: { type:String, required:true, unique:true },
    senha: { type:String, required:true }
})

module.exports = {
    model: Mongoose.model("Cliente", schema)
}

