import React from 'react'
import '../index.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Grid, Row, Col, Button, ListGroupItem } from 'react-bootstrap'




const DeleteArticle = () => {
  //
  // async delUser (body) {
  //   await fetch(`http://localhost:3001/users/${body.user_id}`, {
  //     method: 'DELETE',
  //     body: JSON.stringify(body),
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //     }
  //   })
  // }

  return (
    <div>
      <h1>User Articles</h1>
      <Button type='button' >Delete</Button>
    </div>
    )
}



export default DeleteArticle
