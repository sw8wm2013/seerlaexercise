import * as types from "./actionTypes";

export const updateUserInput = function(user) {
  return { type: types.UPDATE_USER_INPUT, payload: user };
};

export const submitUser = () => (dispatch, getState) => {
  const {
    firstName,
    lastName,
    username,
    email,
    password
  } = getState().usersReducer;

  fetch("/api/registeruser", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      firstName,
      lastName,
      username,
      email,
      password
    })
  }).then(res => {
    return res.json();
  });
};
