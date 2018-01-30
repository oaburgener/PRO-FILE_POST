import React from 'react'
import LargePics from './largePics'
import{Grid, Row, Column} from 'react-bootstrap'

const Jumbotron = ({ trending_articles }) => {

  return (

    <div className="container-fluid" style={{marginTop:'70px'}}>
      <div className="row">
        {/* <div className='row'> */}
        {trending_articles.map(article=> (<LargePics key={article.id} article={article}/>))}
        {/* </div> */}
      </div>
    </div>
  )
}
export default Jumbotron
