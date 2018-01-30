import React from 'react'
import '../index.css'
import FlatButton from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import Subheader from 'material-ui/Subheader'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import{Grid, Row, Col, Image} from 'react-bootstrap'


const SmallCard = ({article, getArticleId}) => {
  console.log(article)
  return (
      <Col xs={6} sm={4} md={4}>
        <Card
          style=
          {{width:'auto',
            maxHeight:'350px',
          marginBottom: '14px'}}>
          <Link to={`/article/${article.id}`}
          >
            <CardMedia
              onClick={(event)=>{getArticleId(article.id)}}
              overlay={<CardTitle title={article.title} subtitle={article.first_name + ' ' +article.last_name} />}

            >

              <Image className="smallPic" src="https://images.unsplash.com/photo-1496283391099-4bda095db381?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8794ebd95c8b75f60953619f92e71ba2&auto=format&fit=crop&w=829&q=80" alt="" responsive/>

            </CardMedia>
          </Link>
          <CardTitle ttitle={article.title} subtitle={article.author} />
          <CardText expandable={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          <CardActions actAsExpander={true}>
            <FlatButton label="See more" />
          </CardActions>
        </Card>
      </Col>    )
      }







export default SmallCard;
