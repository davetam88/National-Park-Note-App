import React, { Component } from 'react';
import MainContext from '../MainContext';
import '../App.css'
import MainControl from './MainControl';
import NavBar from "./NavBar";
import PictureList from './PictureList';

class PicturePage extends Component {

  static contextType = MainContext;

  // constructor(props) {
  //   super(props);
  // }



  render() {

    return (
      <>
        <MainControl props="this.props" />
        <NavBar />
        <main>
          <section id="js-results" className="bg-main-display cls-results">
            <PictureList />
          </section>
        </main>
      </>
    );
  }
}

export default PicturePage;

