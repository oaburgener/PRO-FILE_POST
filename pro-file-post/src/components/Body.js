import React from 'react'
import SmallCard from './SmallCard'
import { Grid, Row, Col, Image } from 'react-bootstrap'


const Body = ({all_articles, getArticleId})=> {
  return (
      <Row style={{marginLeft: '-24px', marginRight:'-24px'}}>
        {all_articles.map(article=> (<SmallCard key={article.id} article={article}
          getArticleId={getArticleId}/>))}
      </Row>
  )
}

export default Body
