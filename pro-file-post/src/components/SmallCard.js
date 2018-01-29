import React from 'react'
import '../index.css'
import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import Subheader from 'material-ui/Subheader'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'


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

const tilesData = [
  {
    img: 'https://ewc.wy.edu/wp-content/uploads/2013/05/EWC2013regionalchampions.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'https://www.scu.edu/media/ethics-center/sports/4111101027_65bbc29aec_z.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'http://www.collegesportsmadness.com/sites/default/files/article-pictures/softball/l-n/michigan_team_0.jpg?1325135862',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'http://static6.businessinsider.com/image/57ffc83cda177d1b008b4b92-1190-625/the-25-schools-that-make-the-most-money-in-college-sports.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'images/grid-list/hats-829509_640.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'images/grid-list/honey-823614_640.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'images/grid-list/vegetables-790022_640.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/water-plant-821293_640.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];
const GridListExampleSimple = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
      cols={3}
      padding={20}

    >
      <Subheader>Articles</Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleSimple;
