import {
  GET_ARTICLES_DELETE,
} from '../actions/actions_index'

const initialState = {
  user_id: 0,
  article: {},
  body: [],
  is_admin: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES_DELETE:
    return {
      ...state,
      article: action.data,
      body: action.body
    }
    default: return state
  }
}
