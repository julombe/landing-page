const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

//using CSS in front
server.use(express.static('public'))

//configuring template engine nunjucks
server.set("view engine", "html")
nunjucks.configure("views", {
    express: server
})

//creating routes
server.get("/", function(req, res){
    return res.render('index')
})

server.use(function(req,res) {
    res.status(404).render("not-found")
})


//starting server
server.listen(3000, function(){
    console.log("server is running")
})