const Mongoose = require("mongoose")
const Schema = Mongoose.Schema;

const schema = new Schema({
    titulo: { type:String, required:true, trim:true },
    slug: { type:String, required:true, trim: true, index:true, unique:true },
    descricao: { type:String, required:true, trim:true },
    preco: { type:Number, required:true },
    estoque: { type:Number, required:true },
    imagem: { type:String, required:true },
    ativo: { type:Boolean, required:true },
    tags: [{ type:String, required:true }]
})

module.exports = {
    model: Mongoose.model('Produto', schema)
}