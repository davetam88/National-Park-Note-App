import React, { Component } from 'react';
import MainContext from '../MainContext';
import '../App.css'
import './FavForm.css'

import config from '../config';
import PropTypes from 'prop-types';

class RegistrationPage extends Component {
  static contextType = MainContext;

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password1: "",
      password2: "",
      entryError: null,
    }
  }

  updateUsername(username) {
    this.setState({ username: { value: username } }, () => {
    });
  }

  updatePassword1(password1) {
    this.setState({ password1: { value: password1 } }, () => {
    });
  }

  updatePassword2(password2) {
    this.setState({ password2: { value: password2 } }, () => {
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password1, password2 } = e.target;

    const password = password1;
    this.context.RegistrationCB(username, password);
    // post to api
  }

  render() {
    return (
      <main>
        <div class="FavPark-form-container">
          <form class="FavPark-form"
            onSubmit={this.handleSubmit}
          >
            <h2>
              Please Enter Registration Infomation
              </h2>

            <label for="username" class="label"> Username:</label>
            <input type="text" id="username" name="username"
              placeholder="Username" value="dave"
              required="" />
            <br />

            <label for="password1" class="label">Password:</label>
            <input type="password" id="password1" name="password1" placeholder="Password" value="mypasswd"
              required="" />
            <br />

            <label for="password2" class="label">Re-type Password:</label>

            <input type="password" id="password2" name="password2"
              placeholder="Password" value="mypasswd"
              required="" />
            <br />

            <div id="js-error-message" class="error-message"></div>

            <div class="filter-button-section">
              <div class="FavPark-form-buttons-wrapper">
                <a href="wf-main.html">
                  <button type="submit">Submit</button>
                </a>
                <a href="wf-main.html">
                  <button type="button">Cancel</button>
                </a>
              </div>
            </div>

          </form>
        </div>
      </main>
    );
  }
}

export default RegistrationPage;
