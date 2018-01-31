import {
  GET_USERS,
  DELETE_USER,
} from '../actions/actions_index'

const initialState = {
  all_users: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
    return {
      ...state,
      all_users: action.data,
    }
    case DELETE_USER:
    return {
      ...state,
      all_users: action.data,
    }
    default: return state
  }
}
