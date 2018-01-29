import React from 'react'
import '../index.css'
import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import Subheader from 'material-ui/Subheader'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'
import {Image} from 'react-bootstrap'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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

const SmallCard = ({article, getArticleId}) => {
  console.log(article);
  return (

      <div style={styles.root}>
        <GridList
          cellHeight={180}
          style={styles.gridList}
          cols={3}
          padding={20}
        >
          <GridTile> <Link to={`/article/${article.id}`}>
            <Image onClick={(event)=>{getArticleId(article.id)}}
              className="small-card"  src="https://images.unsplash.com/photo-1496283391099-4bda095db381?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8794ebd95c8b75f60953619f92e71ba2&auto=format&fit=crop&w=829&q=80" responsive
            /></Link>

            <h4>{article.title}</h4>
            <p>Author</p>
          </GridTile> 
        </GridList>
      </div>    )
      }



export default SmallCard;
