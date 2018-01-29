const express = require('express')
const router = express.Router()
const knex = require('../knex')
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser')


const store = (req,res,sendit)=>{
  var salt = bcrypt.genSaltSync(6)
  var hash = bcrypt.hashSync(req.body.password, salt);
  knex('users').insert({
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    email:req.body.email,
    password:hash
  },'*')
  .then(user=>{
    res.status(204).send({id:user[0].id})
  })
  .catch(err=>{next(err)})
}
const compare = (req,res,sendit)=>{
  knex('users').where({
  email: req.body.email
  }).first()
  .then(user=>{
    bcrypt.compare(req.body.password, user.password, function(err, ver) {
        ver ? res.status(200).send({id:user.id}): res.sendStatus(401)
    })
  .catch(err=>{next(err)})
  })
}
module.exports = {
  store,
  compare
}
