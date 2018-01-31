import React, { Component } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'



class Article extends Component {
  constructor(props){
    super(props)
     this.shareLink = window.location.href
    console.log("fb link: ", typeof this.shareLink);
  }
  getLikes() {
    console.log("before click: ", this.props.article.likes);
    this.props.article.likes += 1
    return this.props.article.likes
    console.log("after click: ", this.props.article.likes);
  }


  render(){
    return (
    <div className= 'article-container'>
      <div >
        <Image className='header_image' src={this.props.article.image_url}/>
      </div>
      <h1 className='article_title'>{this.props.article.title}</h1>
      <h3 className='author_name'>{this.props.article.first_name} {this.props.article.last_name}</h3>
      {this.props.body.map(paragraph=>(<p className='article_body'>{paragraph}</p>))}
      <div className= "share-buttons">
        <i onClick= {() => this.getLikes()} class="material-icons">thumb_up</i>
        <div>Likes: {this.props.article.likes}</div>
        <div className="fb-share-button" data-href={`${this.shareLink}`} data-layout="button" data-size="small" data-mobile-iframe="false"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2Fshare-button%23configurator&amp;src=sdkpreparse">Share</a></div>
        <a target= "_blank" href={`https://twitter.com/intent/tweet?text=${this.shareLink}`} data-size="large"><img className="twitter-share-button" src={require('../logos/tweetLogo.png')} /></a>
      </div>
    </div>
    )
  }
}

export default Article
