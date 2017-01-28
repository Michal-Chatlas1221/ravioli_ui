import React from 'react'
import SignupFormContainer from '../containers/SignupFormContainer'
import LogoutComponentContainer from '../containers/LogoutComponentContainer'
import TaskCreatorContainer from '../containers/TaskCreatorContainer'
import TasksListContainer from '../containers/TasksListContainer'
import ScriptForCalculationsContainer from '../containers/ScriptForCalculationsContainer'
import Header from '../containers/HeaderContainer'

export default class Main extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <Header />
        {
          this.props.auth.currentUser ? 
          null :
          <div className="info content">
            <h3>Ravioli is a project that allows you to make use of other people computing
              power coming from their web browsers. This system allows you to use our pool of associated
              websites and blogs for your calculations. We provide you everything! To make a job request just login and fill
              the short form.
            </h3>
          </div> 
        }        
        { 
          this.props.auth.currentUser ?
            <div className="tasks-management">
              <TaskCreatorContainer />
              <TasksListContainer />  
              <ScriptForCalculationsContainer />         
            </div> :
            null
        }
      </div>
    )
  }
}
