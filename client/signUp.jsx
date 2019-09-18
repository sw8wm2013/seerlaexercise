import React from 'react';

const SignUp = (props) => {
  return(
    
  <div className="page-container" id="sign-in-page-container">

  <div className="input-container">
   <label htmlFor="email-field" className="text">Email</label>
    <input type="text" placeholder="Email" className="input-field" id="email-field"/>
    <label htmlFor="username-field" className="text">Username</label>
    <input type="text" placeholder="Username" className="input-field" id="username-field"/>
    <label htmlFor="password-field" className="text">Password</label>
    <input type="text" placeholder="Password" className="input-field" id="password-field"/>
    <button className="button" id="submit-button">Submit</button>

  </div>

  {/* <div>

    <NavLink to="/signUp">Sign Up</NavLink>
    
  </div> */}

</div>
  )
}

export default SignUp;