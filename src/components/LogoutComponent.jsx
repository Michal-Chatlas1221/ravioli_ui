import React from 'react';

class LogoutComponent extends React.Component {
  logoutClick() {
    this.props.logout(this.props.currentUser);
  }
  render() {
    return(
      <div className="logout">
        <span>Hello {this.props.currentUser.email}</span>
        <button onClick={this.logoutClick.bind(this)} className="button">Logout</button>
      </div>
    );
  }
}

export default LogoutComponent;
