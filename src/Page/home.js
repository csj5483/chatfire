import React from 'react';
import Header from '../Components/header';
import './home.css';
import MaleImage from './male.png';

import FemaleImage from './female.png';

import { Redirect } from 'react-router-dom';
import { Grid, Button, Message } from 'semantic-ui-react';
class HomePage extends React.Component {
  state = {
    want: '',
    current: '',
    success: false,
    errors: [],
    loading: false,
  };

  isFormValid = () => {
    let errors = [];
    let error;

    if (this.currentEmpty(this.state)) {
      error = { message: 'Select Your Gender' };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else if (this.wantEmpty(this.state)) {
      error = { message: 'Select The Gender You Want To Chat With' };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else {
      return true;
    }
  };

  onRadioChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  currentEmpty = ({ current }) => {
    return !current.length;
  };
  wantEmpty = ({ want }) => {
    return !want.length;
  };

  displayErrors = (errors) =>
    errors.map((error, i) => <p key={i}>{error.message}</p>);

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isFormValid()) {
      this.state.success = true;
      console.log(this.state.success);
      this.setState({ errors: [], loading: true });
    }
  };

  render() {
    const { errors, loading } = this.state;

    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header />
          <h2>Your Gender</h2>
          <div>
            <input
              type="radio"
              id="currentMale"
              name="current"
              checked={this.state.current === 'currentMale'}
              onChange={this.onRadioChange}
              value="currentMale"
            />
            <label for="currentMale">
              <center>
                <h5>Male</h5>
              </center>
              <br></br>
              <img height="100" width="100" alt="" src={MaleImage} />
            </label>
            <input
              type="radio"
              id="currentFemale"
              onChange={this.onRadioChange}
              checked={this.state.current === 'currentFemale'}
              name="current"
              value="currentFemale"
            />
            <label for="currentFemale">
              <center>
                <h5>Female</h5>
              </center>
              <br></br>
              <img height="100" width="100" alt="" src={FemaleImage} />
            </label>
          </div>
          <h2>Want To Chat With</h2>
          <div>
            <input
              type="radio"
              id="wantFemale"
              onChange={this.onRadioChange}
              checked={this.state.want === 'wantFemale'}
              value="wantFemale"
              name="want"
            />
            <label for="wantFemale">
              <center>
                <h5>Female</h5>
              </center>
              <br></br>
              <img height="100" width="100" alt="" src={FemaleImage} />
            </label>
            <input
              type="radio"
              id="wantMale"
              value="wantMale"
              onChange={this.onRadioChange}
              checked={this.state.want === 'wantMale'}
              name="want"
            />
            <label for="wantMale">
              <center>
                <h5>Male</h5>
              </center>
              <br></br>
              <img height="100" width="100" alt="" src={MaleImage} />
            </label>
          </div>

          <Button
            onClick={this.handleSubmit}
            disabled={loading}
            className={loading ? 'loading' : ''}
            color="pink"
            inverted
            size="huge"
          >
            Submit
          </Button>
          {errors.length > 0 && (
            <Message error>
              <h3>Error</h3>
              {this.displayErrors(errors)}
            </Message>
          )}
          <p>
            {(() => {
              if (this.state.success === true) {
                return (
                  <Redirect
                    to={{
                      pathname: '/chat',
                      state: {
                        wantG: this.state.want,
                        currentG: this.state.current,
                      },
                    }}
                  />
                );
              }
            })()}
          </p>
        </Grid.Column>
      </Grid>
    );
  }
}

export default HomePage;
