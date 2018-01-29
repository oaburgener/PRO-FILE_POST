const knex = require('../knex.js');
var express = require('express');

const getArticles = (req,res,next) =>{
  knex('users')
  .join('articles', 'users.id', '=', 'articles.user_id')
  .select('articles.id', 'users.first_name', 'users.last_name', 'articles.title', 'articles.summary',
  'articles.body', 'articles.image_url', 'articles.sport', 'articles.views',
  'articles.likes', 'articles.created_at', 'articles.updated_at')
  .then(data => {res.send({ data })
  })
}

const filter = (req,res,next) => {
  knex('articles')
  .where('sport', req.params.sport)
  .then((data) => {res.send({data})}
)}

const getArticleId = (req,res,next) => {
  let id = req.params.id
  knex('users')
  .join('articles', 'users.id', '=', 'articles.user_id')
  .where('articles.id', id)
  .select('articles.id', 'users.first_name', 'users.last_name', 'articles.title', 'articles.summary',
  'articles.body', 'articles.image_url', 'articles.sport', 'articles.views',
  'articles.likes', 'articles.created_at', 'articles.updated_at')
  .then(data => {res.send({ data: data[0] })
  })
}

module.exports = {
  getArticles,
  filter,
  getArticleId
}
