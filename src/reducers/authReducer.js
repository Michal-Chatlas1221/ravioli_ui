import {
  RECEIVE_LOGGED_USER,
  RECEIVE_LOGIN_ERROR,
} from '../actions/actionTypes.js';

const initialState = {
  currentUser: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
  case RECEIVE_LOGGED_USER:
    return Object.assign({}, state, {currentUser: action.response});
  default:
    return state;
  }
};


console.log(auth);

// module.exports = {isAuthorised: (user) => !!user.token};

export default auth;
