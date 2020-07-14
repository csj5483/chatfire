import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import './App.css';
import Home from './Page/home';

import firebase from './Services/firebase';
import { toast, ToastContainer } from 'react-toastify';

class App extends Component {
  showToast = (type, message) => {
    switch (type) {
      case 0:
        toast.warning(message);
        break;
      case 1:
        toast.success(message);
        break;
      default:
        break;
    }
  };

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
