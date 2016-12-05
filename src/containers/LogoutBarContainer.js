import { connect } from 'react-redux'
import { logout } from '../actions/logoutAction'
import LogoutBar from '../components/LogoutBar.jsx'

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (username) => {
      dispatch(logout(username))
    }
  }
}

const LogoutBarContainer = connect(
  state => state.auth,
  mapDispatchToProps
)(LogoutBar)

export default LogoutBarContainer