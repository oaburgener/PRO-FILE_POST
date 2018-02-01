import React from 'react'
import '../index.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Grid, Row, Col, Button, ListGroupItem } from 'react-bootstrap'
import UserCard from './UserCard'
import { getUsers } from '../actions/actions_index.js'
import { delUser } from '../actions/actions_index.js'


const DeleteArticle = ({article}) => {

  return (
    <div>
      <p><span style={{fontSize: '19px'}}> ARTICLE TITLE: {article.title}</span> ARTICLE SUMMARY: {article.summary}
      </p>
      <Button type='button' bsSize="small"  className='admin-button' //onClick={async ()=> {await delArticle(article.id)
        //  await getArticleId()}}
      >Delete</Button>
        </div>
    )
}



export default DeleteArticle
