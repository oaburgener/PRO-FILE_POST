var express = require('express');
var router = express.Router();
var users = require('./users')
var articles = require('./articles.js');

router.get('/users', users.getUsers)

router.get('/articles', articles.getArticles)

router.get('/articles/:sport', articles.filter)

router.get('/articles/:id', articles.getArticleId)

module.exports = router;
