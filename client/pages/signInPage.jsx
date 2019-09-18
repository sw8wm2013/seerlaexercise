import React from 'react';

function SignInPage(props) {

  return(
  <div className="page-container" id="sign-in-page-container">

    <div className="input-container">

      <p className="text">Username</p>
      <textArea placeholder="Username" className="input-field" id="username-field"></textArea>
      <p className="text">Password</p>
      <textArea placeholder="Password" className="input-field" id="password-field"></textArea>
      <button className="button" id="submit-button">Submit</button>

    </div>

    <div>

      <NavLink to="/signUp">Sign Up</NavLink>
      
    </div>

  </div>
  )

};

export default SignInPage;
