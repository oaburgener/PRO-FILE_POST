import React from 'react'
import '../index.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Grid, Row, Col, Button, ListGroupItem } from 'react-bootstrap'
import { delUser } from '../App.js'



const UserCard = ({ user, getUsers, article, delUser}) => {



  return (


    <Grid>
      <Row className="user_info">
        <Col lg={12}>
          <ListGroupItem>NAME: {user.first_name} {user.last_name}</ListGroupItem>
          <ListGroupItem>EMAIL: {user.email}</ListGroupItem>
          <ListGroupItem>USER RATING: {user.rating}<Button bsSize="small" className='admin-button'
            onClick={async ()=> {await delUser(user.id)
            await getUsers()}}>Delete</Button></ListGroupItem>
        </Col>
      </Row>
    </Grid>
    )
}



export default UserCard;
