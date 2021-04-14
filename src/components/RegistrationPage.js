import React, { Component } from 'react';
import MainContext from '../MainContext';
import '../App.css'
import './FavForm.css'
import STORE from '../STORE'

import config from '../config';
import PropTypes from 'prop-types';
import { isAfter } from 'date-fns';

class RegistrationPage extends Component {
  static contextType = MainContext;

  constructor(props) {
    super(props);

    this.state = {
      // username1: "",

      currentUser: {
        id: "",
        username: "",
        password: "",
      },

      username: {
        value: "",
      },
      password1: {
        value: "",
      },
      password2: {
        value: "",
      },
      entryError: null,
    }
  }

  static defaultProps = {
    history: {
      push: () => { },
    },
  };

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

  handleCancel = () => {
    this.props.history.push('/')
  };



  handleSubmit = (e) => {

    e.preventDefault();
    const { entryError, currrenUser, username, password1, password2 } = this.state;


    if (username.value === "")
    {
      alert("Username is Required");
      return
    }

    if (password1.value === "")
    {
      alert("Password is Required");
      return
    }

    if (password2.value === "")
    {
      alert("Confirm Password is Required");
      return
    }


    if (password1.value === password2.value)
    {
      const password = password1;
      let usernametaken = false;
      this.context.users.forEach(list => {
        if (list.username === username.value)
        {
          alert("Username Already Taken, Please Try Other.");
          usernametaken = true;
        }
      })
      if (!usernametaken)
      {
        alert("Thank You For Registering, We Will Bring You to Your User Page Now.");

        this.context.RegistrationCB(username, password);
        // this.context.usernamex = username;
        // this.context.password = password;

        this.props.history.push("/");
      }
      // post to api
    } else
    {
      alert("Password And Re-type Password Do No Match, Please Try Again")
    }
  }


  render() {
    // const { folders = [] } = this.context;

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
              placeholder="Username"
              onChange={(e) => this.updateUsername(e.target.value)}
              required="" />
            <br />

            <label for="password1" class="label">Password:</label>
            <input type="password" id="password1" name="password1" placeholder="Password"
              onChange={(e) => this.updatePassword1(e.target.value)}
              required="" />
            <br />

            <label for="password2" class="label">Re-type Password:</label>
            <input type="password" id="password2" name="password2"
              placeholder="Password"
              onChange={(e) => this.updatePassword2(e.target.value)}
              required="" />
            <br />

            <div id="js-error-message" class="error-message"></div>

            <div class="filter-button-section">
              <div class="FavPark-form-buttons-wrapper">

                <button type="submit">Submit</button>

                <button type='button' onClick={this.handleCancel}>
                  Cancel</button>

              </div>
            </div>

          </form>
        </div>
      </main >
    );
  }
}

export default RegistrationPage;
