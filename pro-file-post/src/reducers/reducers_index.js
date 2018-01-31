import { combineReducers } from 'redux'
import splash from './splash.js'
import article from './article.js'
import admin from './admin.js'

export default combineReducers({
  splash,
  article,
  admin
})
