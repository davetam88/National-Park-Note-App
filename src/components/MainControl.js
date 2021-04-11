import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import MainContext from '../MainContext';
import '../App.css'
import MainControlForm from './MainControlForm';
import NavBar from "./NavBar";
import PropTypes from 'prop-types';

class MainControl extends Component {

  render() {

    let styles = {
      'a:link': 'color: white',
      'marginLeft': '8px',
      'color': 'limegreen',
    };

    return (
      <>
        <header className="bg-callout">
          <h1>National Park Trip Planner</h1>
          <div className='no-login'>
            <h2 className="app-title"> All The Information You Need to Know About Your Favorite National Park in One Easy to Use
            App, Narrow Down Your Search by State And Activities; Plan your trip by creating your own

              <Link to='/login'>
                <span style={styles}>
                  User Account
                </span>
              </Link>

            </h2>
          </div>
          <MainControlForm />
        </header>
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

