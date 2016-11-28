import { connect } from 'react-redux';
import { submitSignupForm } from '../actions/authActions';
import SignupForm from '../components/SignupForm.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    submitSignupForm: (form) => {
      dispatch(submitSignupForm(form));
    }
  };
};

const SignupFormContainer = connect(
  state => state.auth,
  mapDispatchToProps
)(SignupForm);

export default SignupFormContainer;
