import React from 'react'
import '../index.css';
import { Grid, Row, Col, Image } from 'react-bootstrap'


const LargePics = ({ article }) => {

  return (
    <Col md={4} lg={4} style={{paddingLeft: "6px", paddingRight: "6px", marginBottom:'25px'}}  className="hidden-sm-down hidden-xs-down">
      <div className='imageBig' style={{backgroundImage: `url(${article.image_url})` }}>
        <div className="box">
          <h2 className='largeTitle'>{article.title}</h2>
          <h4 className="largeSub">{article.first_name} {article.last_name}</h4>
        </div>
      </div>
      <div className='middle'>
        <div className='text'>{article.summary}</div>
      </div>
    </Col>
  )
}
export default LargePics
