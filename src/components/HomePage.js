import React, { Component } from 'react';
import MainContext from '../MainContext';
import '../App.css'
import MainControl from './MainControl';
import ParkList from './ParkList';
import NavBar from "./NavBar";

class HomePage extends Component {

  static contextType = MainContext;

  constructor(props) {
    super(props);
  }


  render() {


    return (
      <>
        <MainControl props="this.props" />
        <NavBar />
        <main>
          <section id="js-results" className="bg-main-display cls-results">
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

