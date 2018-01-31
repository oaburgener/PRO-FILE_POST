const knex = require('../knex.js')
const express = require('express')
const bodyParser = require('body-parser')
const secret = process.env.SECRET || 'A4e2n84E0OpF3wW21'
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

const getArticles = (req,res,next) =>{
  knex('users')
  .join('articles', 'users.id', '=', 'articles.user_id')
  .select('articles.id', 'users.first_name', 'users.last_name', 'articles.title', 'articles.summary',
  'articles.body', 'articles.image_url', 'articles.sport', 'articles.views',
  'articles.likes', 'articles.created_at', 'articles.updated_at', 'articles.user_id')
  .then(data => {
    res.status(200).send({ data })
  })
  .catch(err => {next(err)})
}

const filter = (req,res,next) => {
  knex('articles')
  .where('sport', req.params.sport)
  .then((data) => {res.send({data})}
)}

const getArticleId = (req,res,next) => {
  var id = req.params.id
  knex('users')
  .join('articles', 'users.id', '=', 'articles.user_id')
  .select('articles.id', 'users.first_name', 'users.last_name', 'articles.title', 'articles.summary',
  'articles.body', 'articles.image_url', 'articles.sport', 'articles.views',
  'articles.likes', 'articles.created_at', 'articles.updated_at')
  .where('articles.id', id)
  .then(data => {
    updateViews(id)
    res.status(200).send({ data: data[0] })
  }).catch(err => {
    next(err)
  })
}

const postArticles = (req,res,next) => {
  knex('articles').insert({
    user_id:req.body.user_id,
    title:req.body.title,
    summary:req.body.summary,
    sport:req.body.sport,
    body:req.body.body,
  },'*').then(data => {res.status(204).send({article:data[0]})})
}

const deleteArticle = (req,res,next) => {
  var decoded = jwt.verify(req.cookies.jwt, 'A4e2n84E0OpF3wW21', function(err, decoded) {
    if(err){
      next(err)
    }else{
      return decoded
    }
  })
  if(!decoded.admin)res.sendStatus(403)
  knex('articles').where({id: req.params.id})
  .then(data=>{res.sendStatus(200)})
  .catch(err=>{next(err)})
}

const updateViews = (id) => {
  knex('articles').where({id: id})
  .then((article)=> {
    console.log('then');
    var newViews = Number(article[0].views) + 1
    knex('articles').where({id: id}).update({views: newViews})
    .then(count=>{
      return;
    })
    .catch(err=>{
      res.sendStatus(304);
    })
  })
  .catch(err=>{
    res.sendStatus(304);
    })
}

module.exports = {
  getArticles,
  getArticleId,
  postArticles,
  deleteArticle,
  filter
}
