import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class BottomNavigationExampleSimple extends Component {

  render() {
    return (
      <footer className='footer'>
        <Paper zDepth={1} style={{height: '44px'}}>
          <BottomNavigation style={{
            height:'29px'
          }}>
            <h6 style={{
              marginTop:'15px',
              fontFamily:'Helvetica',
              fontWeight:'semibold',
              color:'darkgray',
              fontSize:'18px'
            }}>Copyright 2018 PRO-Post Media</h6>
          </BottomNavigation>
        </Paper>
      </footer>
    );
  }
}

export default BottomNavigationExampleSimple;
// import React, { Component } from 'react'
// import '../App.css'
//
//
// const Footer = () => {
//   return (
//     <div className= "footer">
//
//       <footer className="navbar-fixed-bottom">
//       	<div className="container">
//       		<div className="row">
//       			<img className= "footerLogo" src={ require('../logos/round-logo.png') } />
//             <h3 className= "footerTitle">Contact</h3>
//             <div class="fb-share-button" data-href="https://www.google.com" data-layout="button_count" data-size="large" data-mobile-iframe="false"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse">Share</a></div>
//             <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
//       		</div>
//       	</div>
//       	</footer>
//     </div>
//   )
// }
//
//
// export default Footer
