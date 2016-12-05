import {
  LOGOUT,
  LOGOUT_ERROR,
} from './actionTypes'

export const logout = (user) => ({
  type: LOGOUT
})
  // dispatch => {
  //   // fetch("http://localhost:4000/api/log_out", {
  //   //   method: "POST",
  //   //   body: username
  //   // })
  //   // .then(
  //   //     response => response.json().then(json =>
  //   //       dispatch(
  //   //         response.status === 200 ?
  //   //          successfulLogout(json)
  //   //       )
  //   //       receiveLogoutError
  //   //     )
  //   // )
  //   console.log("logout")
  //   console.log("Username", user.token)
  //   dispatch(LOGOUT);
  // };

const successfulLogout = () => ({
  type: LOGOUT
});

const receiveLogoutError = () => ({
  type: LOGOUT_ERROR
});
