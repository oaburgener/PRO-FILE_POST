import React, { Component } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'



class Article extends Component {
  constructor(props){
    super(props)
  }
  getLikes() {
    console.log(this.props.article)
  }

  render(){
    console.log(this.props.body)
    return (
    <div>

      <div >
        <Image className='header_image' src={this.props.article.image_url}/>
      </div>
      <h1 className='article_title'>{this.props.article.title}</h1>
      <h3 className='author_name'>{this.props.article.first_name} {this.props.article.last_name}</h3>
      {this.props.body.map(paragraph=>(<p className='article_body'>{paragraph}</p>))}

      <button><i onClick= {this.getLikes()} class="material-icons">thumb_up</i></button>
      <div className="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/share-button#configurator" data-layout="button" data-size="small" data-mobile-iframe="false"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2Fshare-button%23configurator&amp;src=sdkpreparse">Share</a></div>
      <a className="twitter-share-button" target= "_blank" href="https://twitter.com/intent/tweet?text=Hello%20world" data-size="large">Tweet</a>
    </div>
    )
  }
}

export default Article
