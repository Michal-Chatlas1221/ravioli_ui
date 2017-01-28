import { connect } from 'react-redux'
import Header from '../components/Header.jsx'

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const HeaderContainer = connect(
  mapStateToProps
)(Header)

export default HeaderContainer