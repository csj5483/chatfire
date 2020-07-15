import React, { Component } from 'react';
import Header from '../Components/header';
import './home.css';
import MaleImage from './male.png';
import FemaleImage from './female.png';
import { Button, Toast } from 'react-bootstrap';
import { toast } from 'react-toastify';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      want: null,
      current: null,
    };
    this.onRadioChange = this.onRadioChange.bind(this);
    this.checkValue = this.checkValue.bind(this);
  }

  onRadioChange(e) {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  checkValue() {
    let currentUser = this.state.current;
    let wantUser = this.state.want;

    if (currentUser === null) {
      console.log('He');
    } else if (wantUser === null) {
      console.log('Hi');
    }
  }
  render() {
    return (
      <div>
        <Header />
        <h2>Your Gender</h2>
        <div>
          <input
            type="radio"
            id="selectMale"
            name="current"
            checked={this.state.current === 'selectMale'}
            onChange={this.onRadioChange}
            value="selectMale"
          />
          <label for="selectMale">
            <center>
              <h5>Male</h5>
            </center>
            <br></br>
            <img height="100" width="100" alt="" src={MaleImage} />
          </label>
          <input
            type="radio"
            id="selectFemale"
            onChange={this.onRadioChange}
            checked={this.state.current === 'selectFemale'}
            name="current"
            value="selectFemale"
          />
          <label for="selectFemale">
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
          variant="outline-primary"
          type="button"
          size="lg"
          onClick={this.checkValue}
        >
          Chat Now
        </Button>{' '}
      </div>
    );
  }
}
