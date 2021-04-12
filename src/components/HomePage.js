import React, { Component } from 'react';
import MainContext from '../MainContext';
import '../App.css'
import MainControl from './MainControl';
import ParkList from './ParkList';
import NavBar from "./NavBar";
import PropTypes from 'prop-types';

class HomePage extends Component {

  render() {
    return (
      <>
        <MainControl />
        <NavBar />
        <main>
          <section id="js-results" class="bg-main-display cls-results">
            <ParkList />
          </section>
        </main>
      </>
    );
  }
}

HomePage.propTypes = {
};

export default HomePage;

