const express = require('express')
const routes = express.Router()


//creating routes
routes.get("/", function(req, res){
    return res.render('index')
})

routes.use(function(req, res) {
    res.status(404).render("not-found");
});

module.exports = routes