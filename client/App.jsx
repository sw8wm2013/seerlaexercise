import React from 'react';
import SignIn from './signIn.jsx';
import SignUp from './signUp.jsx';
import Explore from './explore.jsx';
import Profile from './profile.jsx';
import {Route, Switch} from 'react-router-dom';


const App = (props) => {
  return(
    <div>
      {/* <Switch> */}
        <Route exact path = '/' component = {SignIn}/>
        <Route path = '/signUp' component = {SignUp}/>
        <Route path = '/profile' component = {Profile}/>
        <Route path = '/explore' component = {Explore}/>
      {/* </Switch> */}
    </div>
  );
}

export default App;