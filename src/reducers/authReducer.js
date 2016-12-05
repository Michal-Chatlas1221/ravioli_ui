import {
  RECEIVE_LOGGED_USER,
  RECEIVE_LOGIN_ERROR,
  LOGOUT,
  LOGOUT_ERROR,
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
    console.log("state: ", state)
      return Object.assign({}, state, {currentUser: null}, {view: 'notLogged'})

    case LOGOUT_ERROR:
      return Object.assign({}, state, {error: true}, {view: 'logged'})
    default:
      return state
  }
}

export default auth
