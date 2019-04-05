import React, { Component } from 'react';

import history from './js/history';
import { Container } from 'reactstrap';
import { Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/landingPage/index';
import Signup from './components/authentication/signup';
import Signin from './components/authentication/signin';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route path="/" component={LandingPage} exact></Route>
            <Route path="/signup" component={Signup}></Route>
            <Route path="/signin" component={Signin}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
