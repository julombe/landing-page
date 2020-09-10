const express = require('express')
const nunjucks = require('nunjucks')

const server = express()


//configuring template engine nunjucks
server.set("view engine", "html")
nunjucks.configure("views", {
    express: server
})

//adding routes
server.get("/", function(req, res){
    return res.render('index')
})


//starting server
server.listen(3000, function(){
    console.log("server is running")
})