import {
  LOGOUT,
  LOGOUT_ERROR,
} from './actionTypes'

export const logout = username =>
  dispatch => {
    // fetch("http://localhost:4000/api/log_out", {
    //   method: "POST",
    //   body: username
    // })
    // .then(
    //     response => response.json().then(json => 
    //       dispatch(
    //         response.status === 200 ?
    //          successfulLogout(json)
    //       )
    //       receiveLogoutError
    //     )
    // )
    dispatch({dupa: "dupa", type: "dupa"});
  };

const successfulLogout = () => ({
  type: LOGOUT
});

const receiveLogoutError = () => ({
  type: LOGOUT_ERROR
});