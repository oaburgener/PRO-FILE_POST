const knex = require('../knex.js');
var express = require('express');

const getArticles = (req,res,next) =>{
  knex('users')
  .join('articles', 'users.id', '=', 'articles.user_id')
  .select('users.first_name', 'users.last_name', 'articles.title', 'articles.summary',
  'articles.body', 'articles.image_url', 'articles.sport', 'articles.views',
  'articles.likes', 'articles.created_at', 'articles.updated_at')
  .then(data => {res.send({ data })
  })
}

const filter = (req,res,next) => {
  knex('articles')
  .where('sport', req.params.sport)
  .then((data) => {res.send({data})})
}

module.exports = {
  getArticles,
  filter
}
