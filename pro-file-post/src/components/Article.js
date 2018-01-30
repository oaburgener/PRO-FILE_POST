import React, { Component } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'


class Article extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
    <div className="article">
      <Image src={this.props.article.image_url}/>
      {this.props.article.title}
      {this.props.article.first_name}
      {this.props.article.last_name}
      {this.props.article.body}

    </div>
    )
  }
}

export default Article
