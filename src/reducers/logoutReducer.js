import {
  LOGOUT,
  LOGOUT_ERROR
} from '../actions/actionTypes'

const initialState = {
  currentUser: null,
  error: false,
  view: 'notLogged'
}

const logout = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return Object.assign({}, state, {currentUser: null}, {view: 'notLogged'})
    case LOGOUT_ERROR:
      return Object.assign({}, state, {error: true}, {view: 'logged'})
    default:
      return state
  }
}

export default logout