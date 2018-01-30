import React from 'react'
import '../index.css';
import { Grid, Row, Col, Image } from 'react-bootstrap'


const LargePics = ({ article }) => {

  return (
    <Col sm={12} md={6} lg={6} style={{paddingLeft: "4px", paddingRight: "4px", marginBottom:'25px'}}>
      <div className='imageBig' style={{backgroundImage: `url(${article.image_url})` }}>
        <div className="box">
          <h2 className='largeTitle'>{article.title}</h2>
          <h4 className="largeSub">{article.first_name} {article.last_name}</h4>
        </div>
      </div>
    </Col>
  )
}
export default LargePics
