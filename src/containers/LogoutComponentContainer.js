import { connect } from 'react-redux'
import { logout } from '../actions/logoutAction'
import LogoutComponent from '../components/LogoutComponent.jsx'

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (user) => {
      dispatch(logout(user))
    }
  }
}

const LogoutComponentContainer = connect(
  state => state.auth,
  mapDispatchToProps
)(LogoutComponent)

export default LogoutComponentContainer
