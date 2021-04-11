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
        <ParkList />
      </>
    );
  }
}

HomePage.propTypes = {
};

export default HomePage;

