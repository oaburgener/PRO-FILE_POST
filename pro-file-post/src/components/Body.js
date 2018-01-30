import React from 'react'
import SmallCard from './SmallCard'
import { withStyles } from 'material-ui/styles';


const Body = ({all_articles, getArticleId})=> {
  return (
  <div className="center">
    {all_articles.map(article=> (<SmallCard key={article.id} article={article}
      getArticleId={getArticleId}/>))}
  </div>
  )
}

export default Body
