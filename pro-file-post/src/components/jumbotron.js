import React from 'react'
import LargePics from './largePics'

const Jumbotron = ({ trending_articles }) => {

  return (

    <div className='jumbotron'>
      <div className='grid'>
        <div className='row'>
          {trending_articles.map(article=> (<LargePics key={article.id} article={article}/>))}
        </div>
      </div>
    </div>
  )
}
export default Jumbotron
