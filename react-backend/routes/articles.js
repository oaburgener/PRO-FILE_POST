const knex = require('../knex.js')
const express = require('express')
const bodyParser = require('body-parser')


const getArticles = (req,res,next) =>{
  knex('users')
  .join('articles', 'users.id', '=', 'articles.user_id')
  .select('articles.id', 'users.first_name', 'users.last_name', 'articles.title', 'articles.summary',
  'articles.body', 'articles.image_url', 'articles.sport', 'articles.views',
  'articles.likes', 'articles.created_at', 'articles.updated_at')
  .then(data => {res.send({ data })
  .catch(err => {next(err)})
  })
}

const getArticleId = (req,res,next) => {
  var id = req.params.id
  knex('users')
  .join('articles', 'users.id', '=', 'articles.user_id')
  .where('articles.id', id)
  .select('articles.id', 'users.first_name', 'users.last_name', 'articles.title', 'articles.summary',
  'articles.body', 'articles.image_url', 'articles.sport', 'articles.views',
  'articles.likes', 'articles.created_at', 'articles.updated_at')
  .then(data => {
    updateViews(id,next)
    res.send({ data: data[0] })
  }).catch(err => {next(err)})
}

const postArticles = (req,res,next) => {
  knex('articles').insert({
    firstName:req.body.title,
    lastName:req.body.summary,
    sport:req.body.tags,
    body:req.body.body
  },'*').then(data => {res.sendStatus(204)})
  .catch(err => {next(err)})
}

const deleteArticle = (req,res,next) => {
  knex('articles').where({id: req.params.id})
  .then(data=>{res.sendStatus(200)})
  .catch(err=>{next(err)})
}

const updateViews = (id, next) => {
  knex('articles').where({id: id})
  .then((article)=> {
    var newViews = Number(article[0].views) + 1
    knex('articles').where({id: articleId}).update({views: newViews})
    .then(count=>{
      return;
    })
    .catch(err=>{next(err)})
  })
  .catch(err=>{next(err)})
}

module.exports = {
  getArticles,
  getArticleId,
  postArticles,
  deleteArticle
}
