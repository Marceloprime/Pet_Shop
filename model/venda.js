const Mongoose = require("mongoose")
const Schema = Mongoose.Schema

const schema = new Schema({
    cpfCliente: { type:String, required:true, index:true },
    slug: [{ type:String, trim: true, unique:true }],
    quantidade: [{ type:Number }],
    data: { type:Date }
})

module.exports = {
    model: Mongoose.model('Venda', schema)
}