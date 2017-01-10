import {
  LOGOUT,
} from './actionTypes'

export const logout = (user) => {

	localStorage.removeItem('email')
	localStorage.removeItem('token')

	return {
  	type: LOGOUT
	}
};