const express = require("express")
const server = express()

// #########   Configurar caminhos da aplicação    ###########


//Configurar pasta public

server.use(express.static("public"))

//Configurar página Inicial
server.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

//Rota para create-point

server.get("/create-point", (req, res) => {
    res.sendFile(__dirname + "/views/create-point.html")
})

// Ligando o servidor

server.listen(3000)
