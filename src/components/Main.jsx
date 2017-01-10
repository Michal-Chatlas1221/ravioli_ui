import React from 'react'
import SignupFormContainer from '../containers/SignupFormContainer'
import LogoutComponentContainer from '../containers/LogoutComponentContainer'
import TaskCreatorContainer from '../containers/TaskCreatorContainer'
import TasksListContainer from '../containers/TasksListContainer'

export default class Main extends React.Component {
  render() {
    console.log("props", this.props);
    console.log(this.props.auth.currentUser)

    return (
      <div>
        <div>
          <h2> Ravioli is a state of the art distibuted computing system</h2>
          <p>
            Ravioli allows you to use our pool of associated websites and blogs for your
            calculations without the need for own resources. We provide you everything, and the computing
            power providers
            will be unaware of this. *DEMONIC LAUGHTER*
          </p>
        </div>
        <div>
          {
            this.props.auth.currentUser ?
              <LogoutComponentContainer /> :
              <SignupFormContainer /> 
          }
        </div>
           { 
            // !this.props.auth.currentUser ? null :
            //   this.props.settings.displayForm ?
            //     <div>
            //      <TaskCreatorContainer />
            //     </div> :
            //     null
            this.props.auth.currentUser ?
                <div>
                 <TaskCreatorContainer />
                </div> :
                null
           }
           { 
            this.props.auth.currentUser ?
              <div>
               <TasksListContainer />
              </div> :
              null
           }
      </div>
    )
  }
}
