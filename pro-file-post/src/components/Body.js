import React from 'react'
import {GridList, GridTile} from 'material-ui/GridList'
import SmallCard from './SmallCard'

const styles = {
root: {
display: 'flex',
flexWrap: 'wrap',
justifyContent: 'space-around',
},

gridList: {
width: 800,
height: 750,
},
};

const Body = ({all_articles, getArticleId})=> {

  return (
  <div>
    <GridList
      cellHeight={180}
      style={styles.gridList}
      cols={3}
      padding={20}
    >
      {all_articles.map(article=> (<SmallCard key={article.id} article={article}
        getArticleId={getArticleId}/>))}
    </GridList>
  </div>
  )
}

export default Body
