import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions/actions.js";

const mapStateToProps = store => ({
  firstName: store.usersReducer.firstName,
  lastName: store.usersReducer.lastName,
  username: store.usersReducer.username,
  email: store.usersReducer.email
});

const mapDispatchToProps = dispatch => ({
  submitUser: () => {
    dispatch(actions.submitUser());
  }
});

const VerficationPage = ({
  firstName,
  lastName,
  username,
  email,
  submitUser
}) => {
  return (
    <div className="verificationpage">
      <h1> Please confirm your information: </h1>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <NavLink className="backtosignup" to="/">
        I need to make a change
      </NavLink>
      <NavLink className="confirm" to="/confirm" onClick={e => submitUser(e)}>
        My info. is correct!
      </NavLink>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(VerficationPage);
