import React from 'react'
import SignupFormContainer from '../containers/SignupFormContainer'
import LogoutComponentContainer from '../containers/LogoutComponentContainer'
import Menu from './Menu.jsx'

export default class Header extends React.Component {
	render() {
		return (
			<header id="header">
        <div className="content">
          <h1>Povocop</h1>
            <div className="header-right">
            {	
              this.props.auth.currentUser ?
                <LogoutComponentContainer /> :
                <SignupFormContainer /> 
            }
            { 
              this.props.auth.currentUser ?
                <Menu /> :
                null
            }
            </div>
          </div>
  		</header>
		)
	}
}