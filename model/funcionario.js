const Mongoose = require("mongoose")
const Schema = Mongoose.Schema

const schema = new Schema({
    cpf: { type:String, required:true, unique:true, index:true },
    nome: { type:String, required: true },
    cargo: { type:String, required:true },
    dataNascimento: { type:String },
    sexo: { type:String, default:"Não informado" },
    salario: { type:Number },
    email: { type:String, default:"Não informado" },
    senha: { type:String, required:true }
})

module.exports = {
    model: Mongoose.model('Funcionario', schema)
}