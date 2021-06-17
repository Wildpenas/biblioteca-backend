const express = require('express')

const routes = express.Router()



routes.get('/', (req, res) =>  res.render("index"))
routes.get('/book', (req, res) =>  res.render("book"))
routes.get('/book-edit', (req, res) =>  res.render("book-edit"))


module.exports = routes;
