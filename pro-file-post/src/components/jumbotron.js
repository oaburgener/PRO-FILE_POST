import React from 'react'
import LargePics from './largePics'
import{Grid, Row, Column} from 'react-bootstrap'

const Jumbotron = ({ trending_articles }) => {

  return (


      <div className="row topRow">
        {trending_articles.map(article=> (<LargePics key={article.id} article={article}/>))}
      </div>
  )
}
export default Jumbotron
