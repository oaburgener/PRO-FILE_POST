import React from 'react'
import '../index.css'
import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import Subheader from 'material-ui/Subheader'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Grid, Row, Col, Image, Button, ListGroupItem } from 'react-bootstrap'
import { delUser } from '../App.js'



const UserCard = ({ user, getUsers, article, delUser}) => {
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


    <Grid>
      <Row className="user_info">
        <Col lg={12}>
          <ListGroupItem>NAME: {user.first_name} {user.last_name}</ListGroupItem>
          <ListGroupItem>EMAIL: {user.email}</ListGroupItem>
          <ListGroupItem>EMAIL: {user.title}</ListGroupItem>
          <ListGroupItem>USER RATING: {user.rating}<Button bsSize="small" className='admin-button'
            onClick={()=> {
                const body = {
                  "user_id": [user.id]
                }
                delUser(body)}}>Delete</Button></ListGroupItem>
        </Col>
      </Row>
    </Grid>
    )
}



export default UserCard;
