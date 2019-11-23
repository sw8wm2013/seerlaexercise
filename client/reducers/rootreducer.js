import * as types from "../actions/actionTypes.js";

const initialState = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: ""
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_USER_INPUT: {
      console.log("**THIS IS THE ACTION PAYLOAD", action.payload);
      const newFirstName = action.payload.firstName;
      const newLastName = action.payload.lastName;
      const newUsername = action.payload.username;
      const newEmail = action.payload.email;
      const newPassword = action.payload.password;
      const newConfirmPassword = action.payload.confirmPassword;
      return {
        ...state,
        firstName: newFirstName,
        lastName: newLastName,
        username: newUsername,
        email: newEmail,
        password: newPassword,
        confirmPassword: newConfirmPassword
      };
    }
    default:
      return state;
  }
};

export default usersReducer;
