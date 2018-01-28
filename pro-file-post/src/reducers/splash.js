import {
  GET_ARTICLES,
} from '../actions/actions_index'

const initialState = {
  user_id: 0,
  all_articles: [],
  trending_articles: [],
  is_admin: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES:
    return {
      ...state,
      all_articles: action.data,
      trending_articles: action.trending
    }
    default: return state
  }
}
