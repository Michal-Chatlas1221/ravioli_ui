import {
  LOGOUT,
} from './actionTypes'

export const logout = (user) => ({
  type: LOGOUT
})

const successfulLogout = () => ({
  type: LOGOUT
});