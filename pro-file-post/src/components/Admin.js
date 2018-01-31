import React, { Component } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'
import UserCard from './UserCard'
import { getUsers } from '../actions/actions_index.js'




class Admin extends Component {
  constructor(props){
    super(props)
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    this.props.getUsers()
    // this.props.getArticles()
  }

  render(){
    return (

    <div>
      <h2>Admin Dashboard</h2>
      {this.props.all_users.map(user => (<UserCard key={user.id} user={user}
        getUsers={getUsers}/>))}
    </div>
    )
  }
}


export default Admin
