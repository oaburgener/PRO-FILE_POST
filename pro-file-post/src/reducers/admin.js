import {
  GET_USERS,
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
    default: return state
  }
}
