import React from 'react'
import '../index.css';
import { Grid, Row, Col, Image } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const SmallCard = ({article, getArticleId}) => {
  console.log(article);
  return (
    <div>
      <Grid>
        <Row >
          <Col xs={6} md={4} >
            <Link to={`/article/${article.id}`}>
            <Image onClick={(event)=>{getArticleId(article.id)}}
              className="small-card"  src="https://images.unsplash.com/photo-1496283391099-4bda095db381?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8794ebd95c8b75f60953619f92e71ba2&auto=format&fit=crop&w=829&q=80" responsive
            /></Link>
          </Col>
        </Row>
        <Row >
          <Col xs={6} md={4} >
            <h4>{article.title}</h4>
            <p>Author</p>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default SmallCard
