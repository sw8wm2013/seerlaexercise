import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import VerificationPage from "./components/VerificationPage";
import ConfirmationPage from "./components/ConfirmationPage";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={SignUp} />>
          <Route path="/verification" component={VerificationPage} />
          <Route path="/confirm" component={ConfirmationPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
