import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import MainContext from '../MainContext';
import '../App.css'

class NavBar extends Component {
  static contextType = MainContext;

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  // <button className="nav-myFav-btn" disabled>My Favorite Park</button>
  // <button className="nav-myFav-btn" disabled>My Favorite Park</button>

  render() {

    return (
      <div className="nav-main-container">

        <div className="home-nav-links">
          <div>
            <Link to='/'>
              Home
            </Link>

            {/* <a href="wf-about.html">About</a> */}
            <Link to='/about'>
              About
            </Link>

            <Link to='/login'>
              Login
            </Link>

            <Link to='/registration'>
              Registration
            </Link>

            {/* 
            <Link to='/'>
              logout
            </Link> 
 */}
          </div>
        </div>

      </div>





    )
  }
}

export default NavBar;
