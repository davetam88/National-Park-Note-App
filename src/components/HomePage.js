import React, { Component } from 'react';
import '../App.css'
import MainContext from '../MainContext';
import CommonControl from './CommonControl';
import ParkList from './ParkList';

class HomePage extends Component {
  static contextType = MainContext;

  constructor(props) {
    super(props);
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
            <ParkList history={this.props.history} />
          </section>
        </main>
      </>
    );
  }
}

export default HomePage;

