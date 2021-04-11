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

  renderFavControl() {
    // const currentTab = this.props.tabs[this.state.currentTabIndex]

    return (

      <div className="nav-myFav-container">

        <div className="filter-button-section">
          <a href="wf-main-user-fav.html">
            <button className="nav-myFav-btn">My Favorite Park</button></a>
        </div>

        <div id="activities-options-file">
          <label htmlFor="id-order-by">Order by</label>
          <select className="itemRight field-qty-num" id="id-order-by">
            <option value="Park Name">Park Name</option>
            <option value="Stop Number">Stop Number</option>
            <option value="Rating">Rating</option>
            <option value="State">State</option>
            <option value="Activity">Activity</option>
          </select>
        </div>
      </div>
    )
  }


  render() {
    const { logInState } = this.context;
    // logInState

    let styles = {
      'a:link': 'color: white',
      'marginLeft': '8px',
      'color': 'limegreen',
    };

    return (
      <div className="nav-main-container">

        <div className="nav-links">
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


        {this.renderFavControl()}
      </div>





    )
  }
}

export default NavBar;
