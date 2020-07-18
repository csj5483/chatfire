import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './Page/home';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Router>
        <Route exact path="/" render={(props) => <Home {...props} />} />
      </Router>
    );
  }
}
export default App;
