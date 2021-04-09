import React, { Component } from 'react';
import '../App.css'
import './FavForm.css'

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <>

        <main>

          <div class="FavPark-form-container">
            <form class="FavPark-form">
              <h2>
                Please Enter Login Information
        </h2>

              <label for="username" class="FavPark-label"> Username:</label>
              <input type="text" id="username" name="username" placeholder="Username" required="" />
              <br />

              <label for="password" class="label">Password:</label>
              <input type="password" id="password" name="password" placeholder="Password" required="" />

              <br />

              <div id="js-error-message" class="error-message"></div>
              {/* <div class="filter-button-section"> */}
              <div class="FavPark-form-buttons-wrapper">
                <a href="wf-main.html">
                  <button type="submit">Submit</button>
                </a>
                <a href="wf-main.html">
                  <button type="button">Cancel</button>
                </a>
              </div>
            </form>
          </div>
        </main>
      </>
    );
  }
}

export default LoginPage;
