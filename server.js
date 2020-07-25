//Requires para o servidor
const Http = require('http')
const Express = require('express')
const BodyParser = require('body-parser')
const Mongoose = require('mongoose')

//Requires das rotas
const Index = require('./router/index')
const Funcionario = require('./router/funcionario')
const Produto = require('./router/produto')
const Cliente = require('./router/cliente')
const Venda = require("./router/venda")

//Controller do servidor
const Controller = require('./controller/server')

//Conexão ao banco de dados
Mongoose.connect("mongodb://localhost:27017/", { 
    useUnifiedTopology: true, 
    useNewUrlParser: true 
})

//Instanciação do app
const app = Express()

//Uso do body-parser para leitura do body da requisição HTTP
app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: true }))

//Definição das rotas do app
app.use('/', Index.route)
app.use('/funcionario', Funcionario.route)
app.use('/produto', Produto.route)
app.use('/cliente', Cliente.route)
app.use('/venda', Venda.route)
app.use((req,res,next) => { res.status(400).send("Requisição não disponível") })

//Definição da porta em que o app rodará
app.set('port', Controller.port)

//Criação do servidor http
const server = Http.createServer(app)

//Definindo a porta do server e as funções associadas
server.listen(Controller.port)
server
.on("error", Controller.onError)
.on("close", Controller.onClose)
.on("connection", Controller.onConnection)
.on("listening", Controller.onListening)