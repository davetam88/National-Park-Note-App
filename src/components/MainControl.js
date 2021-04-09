import React, { Component } from 'react';
import MainContext from '../MainContext';
import '../App.css'
import MainControlForm from './MainControlForm';
import NavBar from "./NavBar";

import PropTypes from 'prop-types';

class MainControl extends Component {
  /*
    static contextType = BookmarksContext;
  
    static defaultProps = {
      bookmarks: []
    };
  */

  render() {

    return (
      <>
        <header className="bg-callout">

          <h1>National Park Trip Planner</h1>

          <div className='no-login'>
            <h2 className="app-title"> All The Information You Need to Know About Your Favorite National Park in One Easy to Use
				App, Narrow Down Your Search by State And Activities; Plan your trip by creating your own <a
                href="wf-registration.html" style={{ color: "white" }}>user Account</a>
            </h2>
          </div>

          <MainControlForm />
          {/* main contorl form here */}

        </header>
        <NavBar />
      </>
    );
  }
}

MainControl.propTypes = {
  /*
    bookmarks: PropTypes.arrayOf(PropTypes.object)
  */
};
export default MainControl;

