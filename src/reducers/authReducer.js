import {
  RECEIVE_LOGGED_USER,
  RECEIVE_LOGIN_ERROR,
  LOGOUT,
} from '../actions/actionTypes'

const isDataSaved = () => localStorage.getItem('email') && localStorage.getItem('token')
const savedData = () => ({
  email: localStorage.getItem('email'),
  token: localStorage.getItem('token')
})

const initialState = {
  currentUser: isDataSaved() ? savedData() : null,
  error: false,
  view: isDataSaved() ? 'logged' : 'notLogged'
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