import { connect } from 'react-redux';
import { submitSignupForm } from '../actions/authActions.js';
import SignupForm from '../components/SignupForm.jsx';

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitSignupForm: (form) => {
      dispatch(submitSignupForm(form));
    },
  };
};

const SignupFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);

export default SignupFormContainer;
