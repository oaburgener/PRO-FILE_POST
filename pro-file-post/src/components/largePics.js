import React from 'react'
import '../index.css';
import { Grid, Row, Col, Image } from 'react-bootstrap'


const LargePics = ({ article }) => {

  return (
    <Col xs={12} md={4} lg={4}>
      <div className='lagreCard'>
        <div className='image' style={{backgroundImage: `url(${article.image_url})`, backgroundSize: 'cover', padding:'12px', width:'auto', height:'600px', backgroundRepeat:'no-repeat',
        }}>
          <h2>{article.title}</h2>
          <h4>{article.first_name} {article.last_name}</h4>
        </div>
        <div className='middle'>
          <div className='text'>{article.summary}</div>
        </div>
      </div>
    </Col>
  )
}
export default LargePics
