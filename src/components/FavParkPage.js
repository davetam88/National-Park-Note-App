import React, { Component } from 'react';
import '../App.css'
import MainContext from '../MainContext';
import CommonControl from './CommonControl';
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
        <CommonControl
          logInState={logInState}
          displayFavPage={displayFavPage}
          username={username}
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
