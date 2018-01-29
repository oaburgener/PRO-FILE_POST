import React from 'react'
import SmallCard from './SmallCard'

const Body = ({all_articles, getArticleId})=> {

  return (
  <div>
    {all_articles.map(article=> (<SmallCard key={article.id} article={article}
      getArticleId={getArticleId}/>))}
  </div>
  )
}

export default Body
