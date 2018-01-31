import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Menu from 'material-ui/svg-icons/navigation/menu';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom'

const titleStyle={
  color: 'red',
  fontFamily:"Helvetica Neue",
  fontWeight: 'bold',
  marginTop:'3px',
  size:'15px'
}

const toolbar={
  zIndex: '9',
  backgroundColor:'white',
  marginBottom:'18px',
  position:'fixed',
  width:'100vw',
  paddingTop: '5px',
  height: '65px'
}

const toolImage={
  maxHeight: '55px',
  maxWidth: '101px',
  paddingLeft: '24px',
}

export default class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3
    };
  }


  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (

        <Toolbar style={toolbar}>
          <ToolbarGroup firstChild={true}>

            <Link to='/' style={{ textDecoration: 'none' }}>
              <img src={require("../logos/greenLogo.png")} height="180" width= "332" alt="Logo" style={toolImage} />

            </Link>

            <FontIcon className="muidocs-icon-custom-sort" />
          </ToolbarGroup>
          <ToolbarGroup>
            <a href="https://twitter.com/PRO__file" style={{marginLeft:'3px', marginRight:'2px'}}>
              <img src={require('../logos/black twitter.png')} className="icons"/>
            </a>
            <a href="https://www.instagram.com/pro.file.sports/?hl=en">
              <img src={require('../logos/blackGramLogo.png')} className="icons"/>
            </a>
            <a href="https://www.facebook.com/profilesportsinc/">
              <img src={require('../logos/blackFbLogo.jpg')} className="icons"/>
            </a>
            <a href="http://pro-file.us/#/">
              <img src={require('../logos/round-logo.png')} className="icons"/>
            </a>

            <IconMenu
              className= "login-menu"
              iconButtonElement={
                <IconButton touch={true}> <svg fill="#000000" height="27" viewBox="0 0 24 24" width="27" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                </IconButton> }
              style={{marginBottom:'6px', marginLeft:'3px'}}>
              <Link to='/login' style={{ textDecoration: 'none' }}>
                <MenuItem primaryText="Log in" />
              </Link>
              <MenuItem primaryText="Sign up" />
            </IconMenu>

            <IconMenu

              iconButtonElement=
              {<IconButton><svg fill="#000000" height="25" viewBox="0 0 24 24" width="25" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
              </svg></IconButton>}

              onChange={this.handleChangeSingle}
              value={this.state.valueSingle}
              style={{marginBottom:'4px', marginLeft: '-3px' }}>
              <Link to='/about' style={{ textDecoration: 'none' }}>
                <MenuItem  value={1} href="#" primaryText="About" className="menu"/>
              </Link>
              <Link to="/article-submit" style={{ textDecoration: 'none' }}>
                <MenuItem value={2} href="#" primaryText="Submit article" className="menu"/>
              </Link>
            </IconMenu>
          </ToolbarGroup>
        </Toolbar>
    );
  }
}
