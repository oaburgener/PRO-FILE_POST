import '../App.css';
import '../index.css';
import React, { Component, Link } from 'react';


class Filters extends Component {

  state = {
    hover: 0
  }

  render () {
    return (
      <div>
        <div className= "filter-by">
          filter by
        </div>
        <div className= "all-icons">
          <img onMouseEnter= {() => this.setState({ hover: 1 }) } onMouseLeave= {() => this.setState({ hover: 0 }) } className= {this.state.hover == 1 ? "hover-icon" : "filter-icons"} src={ require("../logos/bwBBall.png") }/>
          <img onMouseEnter= {() => this.setState({ hover: 2 }) } onMouseLeave= {() => this.setState({ hover: 0 }) } className= {this.state.hover == 2 ? "hover-icon" : "filter-icons"} src={ require("../logos/baseball.png") }/>
          <img onMouseEnter= {() => this.setState({ hover: 3 }) } onMouseLeave= {() => this.setState({ hover: 0 }) } className= {this.state.hover == 3 ? "hover-icon" : "filter-icons"} src={ require("../logos/goodFootball.png") }/>
          <img onMouseEnter= {() => this.setState({ hover: 4 }) } onMouseLeave= {() => this.setState({ hover: 0 }) } className= {this.state.hover == 4 ? "hover-icon" : "filter-icons"} src={ require("../logos/hockeyLogo.png") }/>
          <img onMouseEnter= {() => this.setState({ hover: 5 }) } onMouseLeave= {() => this.setState({ hover: 0 }) } className= {this.state.hover == 5 ? "hover-icon" : "filter-icons"} src={ require("../logos/Soccerball_mark.svg.png") }/>
        </div>
      </div>
    )
  }
}


export default Filters
