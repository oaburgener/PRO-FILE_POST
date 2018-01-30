import {
  UNAUTHORIZED,
  LOGIN,
} from '../actions/actions_index'

var initialState = {
  toast:false,
  token: false,
}
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
    return {
      ...state,
      token: action.data
    }
    case UNAUTHORIZED:
    return{
      ...state,
      toast: action.data
    }
    default: return state
  }
}
