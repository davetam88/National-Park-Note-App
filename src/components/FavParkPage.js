import React, { Component } from 'react';
import '../App.css'
import MainContext from '../MainContext';
import MainControl from './MainControl';
import NavBar from './NavBar';
import FavParkList from './FavParkList';



class FavParkPage extends Component {
  static contextType = MainContext;
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const { logInState, displayFavPage, username } = this.context;

    return (
      <>
        <MainControl
          logInState={logInState}
          doFavPage="true"
          username={username}
        />
        <NavBar
          username={username}
          logInState={logInState}
        />
        <main>
          <section id="js-results" className="bg-main-display cls-results">
            <FavParkList />
          </section>
        </main>
      </>
    )
  }
}

export default FavParkPage;
