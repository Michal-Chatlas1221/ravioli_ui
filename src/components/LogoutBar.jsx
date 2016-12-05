import React from 'react';

class LogoutBar extends React.Component {
  logoutClick(){
    console.log("logout")
    console.log(this.props)
    this.props.logout(this.props.currentUser);
  }
  render() {
    return(
      <div>
        <span>Hello {this.props.currentUser.email}!</span>
        <button onClick={this.logoutClick.bind(this)}>Logout</button>
      </div>
    );
  }
}

export default LogoutBar;
