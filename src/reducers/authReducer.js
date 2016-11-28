import {
  RECEIVE_LOGGED_USER,
  RECEIVE_LOGIN_ERROR,
} from '../actions/actionTypes'

const initialState = {
  currentUser: null
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_LOGGED_USER:
      return Object.assign({}, state, {currentUser: action.response});
    default:
      return state
  }
}

export default auth;
