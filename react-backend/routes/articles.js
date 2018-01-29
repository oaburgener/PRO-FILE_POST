const knex = require('../knex.js');
var express = require('express');

const getArticles = (req,res,next) =>{
  knex('articles').then((data)=>{res.send({data})})
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
