import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import "./App.css";
import Signin from "./Signin";
import Signup from "./Signup";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h3 className="App-title">Welcome to Self-Registration</h3>
          </header>
          <div className="App-intro">
            Please <Link to="/signin">Sign In</Link> Or{" "}
            <Link to="/signup">Sign Up</Link>
            <Switch>
              <Route path="/signin" component={Signin} />
              <Route path="/signup" component={Signup} />
              <Route path="/homepage" render={props => <h3>home page</h3>} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
