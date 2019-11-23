import React from "react";
import { useInput } from "../hooks/useInput";
import { connect } from "react-redux";
import { updateUserInput } from "../actions/actions";
import { NavLink } from "react-router-dom";

const SignUp = props => {
  const { value: firstName, bind: bindFirstName } = useInput(props.firstName);
  const { value: lastName, bind: bindLastName } = useInput(props.lastName);
  const { value: username, bind: bindUsername } = useInput(props.username);
  const { value: email, bind: bindEmail } = useInput(props.email);
  const { value: password, bind: bindPassword } = useInput("");
  const { value: confirmPassword, bind: bindConfirmPassword } = useInput("");
  return (
    <div>
      <h1>Welcome to SEER! Please create an account.</h1>
      <form>
        <label htmlFor="firstName">
          First Name:
          <input type="text" placeholder="First Name" {...bindFirstName} />
        </label>
        <label htmlFor="lastName">
          Last Name:
          <input type="text" placeholder="Last Name" {...bindLastName} />
        </label>
        <label htmlFor="username">
          Username:
          <input type="text" placeholder="Username" {...bindUsername} />
        </label>
        <label htmlFor="email">
          Email:
          <input type="email" placeholder="Email Address" {...bindEmail} />
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" placeholder="Password" {...bindPassword} />
        </label>
        <label htmlFor="confirmPassword">
          Confirm Password:
          <input
            type="password"
            placeholder="Confirm Password"
            {...bindConfirmPassword}
          />
        </label>
        <NavLink
          className="submitregistration"
          to="/verification"
          onClick={() =>
            props.updateUserInput(
              firstName,
              lastName,
              username,
              email,
              password,
              confirmPassword
            )
          }
        >
          Register{" "}
        </NavLink>
      </form>
    </div>
  );
};

const mapStateToProps = store => ({
  firstName: store.usersReducer.firstName,
  lastName: store.usersReducer.lastName,
  username: store.usersReducer.username,
  email: store.usersReducer.email,
  password: store.usersReducer.password,
  confirmPassword: store.usersReducer.confirmPassword
});

const mapDispatchToProps = dispatch => ({
  updateUserInput: (
    firstName,
    lastName,
    username,
    email,
    password,
    confirmPassword
  ) =>
    dispatch(
      updateUserInput({
        firstName,
        lastName,
        username,
        email,
        password,
        confirmPassword
      })
    )
});

//export default SignUp;
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
