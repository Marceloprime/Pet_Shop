const onError = (error) => {
    if(error.syscall !== 'listen') throw error
    const bind = typeof port == 'string' ? `Pipe ${port}` : `Port ${port}`
    switch(error.code){
        case 'EACCES':
            console.log(`${bind} requires elevated privileges`)
            process.exit(1)
        case 'EADDRINUSE':
            console.log(`${bind} is already in use`)
            process.exit(1)
        default:
            throw error
    }
}

const onClose = () => { console.log(`Server shutdown on port ${port}`) }
const onConnection = () => { console.log(`Server connected on port ${port}`) }
const onListening = () => { console.log(`Server listening on port ${port}`) }

//Porta normalizada
const defaultPort = process.env.PORT || '3000'

const normalizedPort = (valor = defaultPort) => {
    return isNaN(parseInt(valor, 10)) ? valor : parseInt(valor, 10) >= 0 ? parseInt(valor, 10) : false
}

const port = normalizedPort()

module.exports = {
    onError,
    onClose,
    onConnection,
    onListening, 
    port
}