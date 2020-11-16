const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const routes = require('./routes')

const server = express()

//using CSS in front
server.use(express.static('public'))
server.use(routes)

//configuring template engine nunjucks
server.set("view engine", "html")
nunjucks.configure("views", {
    express: server
})

//starting server
server.listen(3000, function(){
    console.log("server is running")
})