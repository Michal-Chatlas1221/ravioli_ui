import React from 'react';

class LogoutBar extends React.Component {
  logoutClick(){
    this.props.logout(this.props.username);
  }
  render() {
    return(
      <div>
        <span>Hello dear {this.props.userName}</span>
        <button onClick={this.logoutClick(this.props.userName)}>Logout</button>
      </div>
    );
  }
}

export default LogoutBar;