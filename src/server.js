const express = require("express")
const server = express()

//Utilizando Template Engine

const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//Configurar pasta public

server.use(express.static("public"))

//Configurar página Inicial
server.get("/", (req, res) => {
    return res.render("index.html", {title: "Um título"})
})

//Rota para search-results

server.get("/search", (req, res) => {
    return res.render("search-results.html")
})

//Rota para create-point

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

// Ligando o servidor

server.listen(3000)



