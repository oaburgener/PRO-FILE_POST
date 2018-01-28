import React from 'react'
import SmallCard from './SmallCard'

const Body = ({getArticles, all_articles})=> {

  return (
  <div>
    {all_articles.map(article=> (<SmallCard key={article.id} article={article}/>))}
  </div>
  )
}

export default Body
