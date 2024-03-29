import React from 'react';

class SignupForm extends React.Component {
  submit(event) {
    const form = new FormData(event.target);
    this.props.submitSignupForm(form);

    event.preventDefault();
  }
  render() {
    return(
      <form onSubmit={this.submit.bind(this)}>
        <label htmlFor="email">Email</label>
        <input name="email" type="email" id="email"/>
        <label htmlFor="password">Password</label>
        <input name="password" type="password" id="password"/>
        <button type="submit">
          Log in/Register
        </button>
      </form>
    );
  }
}

export default SignupForm;
