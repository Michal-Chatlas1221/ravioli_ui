import { connect } from 'react-redux'
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