import React from 'react'
import '../index.css';
import { Grid, Row, Col, Image } from 'react-bootstrap'


const LargePics = () => {

  return (<div className='main'>
    <div className='grid'>
      <div className='row'>
        <div className='col-xs-5'>s
<Image className = 'large-pic' padding = '20px' width = '400px' height = '400px' src = 'https://cloudfront.ualberta.ca/-/media/athletics/teams/pandas-rugby/2017-18/action-pics/1718-holtkamp-2.jpg' responsive />
         </div>
        <div className='col-xs-5'>
<Image className = 'large-pic' padding = '20px' width = '400px' height = '400px' src = 'http://mymindonsports.com/wp-content/uploads/2013/08/elena_delle_donne_sky1-Copy.jpg' responsive />
        </div>
        <div className='col-xs-5'>
<Image className = 'large-pic' padding = '20px' width = '400px' height = '400px' src = 'http://cdn0.wideopenspaces.com/wp-content/uploads/2015/09/1Husker-Bass-Anglers1.png' responsive />
        </div>
      </div>
    </div>
  </div>
)
}
export default LargePics
