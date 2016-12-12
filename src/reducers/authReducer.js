import {
  RECEIVE_LOGGED_USER,
  RECEIVE_LOGIN_ERROR,
  LOGOUT,
} from '../actions/actionTypes'

const initialState = {
  currentUser: null,
  error: false,
  view: 'notLogged'
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_LOGGED_USER:
      return Object.assign({}, state, {currentUser: action.response, error: false, view: 'logged'})
    case RECEIVE_LOGIN_ERROR:
      return Object.assign({}, state, {error: true})
    case LOGOUT:
      return Object.assign({}, state, {currentUser: null}, {view: 'notLogged'})
    default:
      return state
  }
}

export default auth