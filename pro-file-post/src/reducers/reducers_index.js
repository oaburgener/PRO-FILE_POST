import { combineReducers } from 'redux'
import splash from './splash.js'
import article from './article.js'
import login from './login_reducer'
import SignUp from './SignUp_reducer'
import articleDelete from './articleDelete'

export default combineReducers({
  splash,
  article,
  login,
  SignUp,
  articleDelete
})
