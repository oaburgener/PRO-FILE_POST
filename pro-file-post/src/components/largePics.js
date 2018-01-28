import React from 'react'
import '../index.css';
import { Grid, Row, Col, Image } from 'react-bootstrap'


const LargePics = ({ article }) => {

  return (
    <div className='col-xs-5'>
      <div className='container'>
        <div className='image' style={{backgroundImage: `url(${article.image_url})`, backgroundSize: '400px 400px', padding:'20px', width:'400px', height:'400px', backgroundRepeat:'no-repeat'}}>
          <h2>{article.title}</h2>
          <h4>{article.first_name} {article.last_name}</h4>
        </div>
      <div className='middle'>
        <div className='text'>{article.summary}</div>
      </div>
      </div>
    </div>
  )
}
export default LargePics
