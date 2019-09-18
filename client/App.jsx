import React from 'react';
import SignIn from './signIn.jsx';
import SignUp from './signUp.jsx';
import Explore from './explore.jsx';
import Profile from './profile.jsx';

const App = (props) => {
  return(
    <div>
      <SignIn/>
      <SignUp/>
      <Explore/>
      <Profile/>
    </div>
  );
}

export default App;