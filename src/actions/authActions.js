import {
  SUBMIT_SIGN_UP_FORM,
  RECEIVE_LOGGED_USER,
  RECEIVE_LOGIN_ERROR,
  INVALID_CREDENTIALS
} from './actionTypes'

import customHeaderFetch from '../helpers/fetch'

// export const submitSignupForm = form =>
//   dispatch => {
//     customHeaderFetch("http://localhost:4000/api/sign_up", {
//       method: "POST",
//       body: form
//     },
//       null,
//       () => {
//         console.log('successful login!')
//       }
//     )
//   };

export const submitSignupForm = form =>
  dispatch => {
    fetch("http://localhost:4000/api/sign_up", {
      method: "POST",
      body: form
    })
    .then(
        response => response.json().then(json =>
          dispatch(
            response.status === 200 ?
             receiveLoggedUser(json) :
             recieveInvalidCredentials()
          ),
          receiveLoginError
        )
    );
  };

const receiveLoginError = () => ({
  type: RECEIVE_LOGIN_ERROR
});

const recieveInvalidCredentials = () => ({
  type: INVALID_CREDENTIALS
})

const receiveLoggedUser = response => ({
  response,
  type: RECEIVE_LOGGED_USER
});
