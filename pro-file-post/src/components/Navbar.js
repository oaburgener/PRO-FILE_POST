import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import Person from 'material-ui/svg-icons/social/person';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Menu from 'material-ui/svg-icons/navigation/menu';

const titleStyle={
  color: 'red',
  fontFamily:"Helvetica Neue",
  fontWeight: 'bold',
  marginTop:'10px',
  size:'15px'
}

const toolbar={
  backgroundColor:'white',
  marginBottom:'18px',
  position:'fixed',
  width:'100vw',
  paddingTop: '5px',
  height: '60px'
}

const toolImage={
  maxHeight: '60px',
  maxWidth: '60px',
  paddingLeft: '24px',
}

export default class ToolbarExamplesSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <Toolbar style={toolbar}>

        <ToolbarGroup firstChild={true}>
          <img src={require("../logos/round-logo.png")} alt="Logo" style={toolImage}/>
          <ToolbarTitle text="ost"
            style={titleStyle}/>
          <FontIcon className="muidocs-icon-custom-sort" />
          <ToolbarSeparator />
        </ToolbarGroup>
        <ToolbarGroup>

          <svg fill="#000000" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>

        </ToolbarGroup>
        <ToolbarGroup>
          {/* <a href="https://www.facebook.com">
            <img src={require('../logos/blackFbLogo.jpg')} className="icons"/>
          </a> */}
          <a href="https://www.twitter.com" style={{marginLeft:'3px'}}>
            <img src={require('../logos/black twitter.png')} className="icons padding"/>
          </a>
          <a href="https://www.instagram.com">
            <img src={require('../logos/blackGramLogo.png')} className="icons padding"/>
          </a>
          <a href="https://www.facebook.com">
            <img src={require('../logos/blackFbLogo.jpg')} className="icons"/>
          </a>

          <IconMenu
            iconButtonElement={
              <IconButton touch={true}> <svg fill="#000000" height="37" viewBox="0 0 24 24" width="37" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
              </IconButton> }
            style={{
                marginBottom:'6px',
                marginLeft:'-3px',
            }}
          >
            <MenuItem primaryText="Log in" />
            <MenuItem primaryText="Sign up" />
          </IconMenu>
          <IconMenu
            iconButtonElement={<IconButton><svg fill="#000000" height="35" viewBox="0 0 24 24" width="35" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg></IconButton>}
            onChange={this.handleChangeSingle}
            value={this.state.valueSingle}
            style={{
              marginBottom:'6px',
            }}>

            <MenuItem value={1} primaryText="About" className="menu"/>
            <MenuItem value={2} primaryText="Submit article" className="menu"/>
            <MenuItem value={3} primaryText="Contact" className="menu"/>

          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
