import React from 'react'
import SignupFormContainer from '../containers/SignupFormContainer'
import LogoutBarContainer from '../containers/LogoutBarContainer'

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h2>Ravioli is a state of the art distibuted computing system</h2>
          <p>
            Ravioli allows you to use our pool of associated websites and blogs for your
            calculations without the need for own resources. We provide you everything, and the computing
            power providers
            will be unaware of this. *DEMONIC LAUGHTER*
          </p>
        </div>
        <div>
          <SignupFormContainer />
          <LogoutBarContainer />
        </div>
      </div>
    )
  }
}