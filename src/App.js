import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './Page/home';
import ChatPage from './Page/chat';
class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Router>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/chat" render={(props) => <ChatPage {...props} />} />
      </Router>
    );
  }
}
export default App;
