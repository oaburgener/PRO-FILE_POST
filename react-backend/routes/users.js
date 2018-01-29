const express = require('express');
const router = express.Router();
const knex = require('../knex')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')


const getUsers = function(req, res, next) {
  knex('users').then(data=>{res.status(200).send({data})})
  .catch(err=>{next(err)})
}

const deleteUser = function(req,res,next){
  knex('users').where({id : req.params.id}).del()
  .then(data=>{res.sendStatus(200)})
  .catch(err=>{next(err)})
}

module.exports = {
  getUsers,
  deleteUser
}
