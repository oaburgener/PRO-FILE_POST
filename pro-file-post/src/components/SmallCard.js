import React from 'react'
import '../index.css';
import { Grid, Row, Col, Image } from 'react-bootstrap'

const SmallCard = ({article}) => {

  return (
    <div>
      <Grid>
        <Row >
          <Col xs={6} md={4} >
            <Image className="small-card"  src="https://images.unsplash.com/photo-1496283391099-4bda095db381?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8794ebd95c8b75f60953619f92e71ba2&auto=format&fit=crop&w=829&q=80" responsive />
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
