import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import MainContext from '../MainContext';
import '../App.css'

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LogInState: false
    }
  }

  render() {
    return (
      <div class="nav-main-container">
        <div class="nav-links">
          <div>
            <a href="wf-main-user-fav.html">liu-fav</a>
            <a href="wf-main-user-park.html">liu-park</a>
            <a href="wf-pictures.html">pic</a>
            <a href="wf-videos.html">vid</a>
            <br />
            <a href="wf-main.html">Home</a>
            <Link to='/'>
              Home1
            </Link>
            <a href="wf-about.html">About</a>
            <a href="wf-login.html">Login</a>
            <a href="wf-registration.html">Registration</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar;
