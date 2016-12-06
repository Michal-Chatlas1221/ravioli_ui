import { connect } from 'react-redux'
import { submitSignupForm } from '../actions/authActions'
import Main from '../components/Main.jsx'

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const MainContainer = connect(
  mapStateToProps
)(Main)

export default MainContainer