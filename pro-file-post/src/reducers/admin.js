import {
  GET_USERS,
  DELETE_USER,
  DELETE_ARTICLE
} from '../actions/actions_index'

const initialState = {
  all_users: [],
  all_articles:[]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
    return {
      ...state,
      all_users: action.data,
    }
    case DELETE_USER:
    console.log('hit')
    return {
      ...state,
      all_users: action.data,
    }
    case DELETE_ARTICLE:
    console.log('hit');
    return {
      ...state,
      all_articles: action.data,
    }
    default: return state
  }
}
