import React, { Component } from 'react'
import '../App.css'


const Footer = () => {
  return (
    <div className= "footer">
      <footer className="navbar-fixed-bottom">
      	<div className="container">
      		<div className="row">
      			<img className= "footerLogo" src={ require('../logos/round-logo.png') } />
            <h3 className= "footerTitle">Contact</h3>
      		</div>
      	</div>
      	</footer>
    </div>
  )
}


export default Footer
