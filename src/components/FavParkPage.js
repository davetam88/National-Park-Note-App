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

  componentDidMount() {
    // fetchFavParkInfos(parkCode, "");
    // const { stateCode, activity } = this.state;
    this.context.fetchFavParkInfosCB(1);
    // this.fetchParkInfos(stateCode, activity, 20);
  }


  render() {
    const { logInState, username } = this.context;

    return (
      <>
        <MainControl
          history={this.props.history}
          logInState={logInState}
          doFavPage={true}
          username={username}
        />
        <NavBar
          username={username}
          logInState={logInState}
        />


        <main>
          <section id="js-results" className="bg-main-display cls-results">
            <FavParkList history={this.props.history} />
          </section>
        </main>

      </>
    )
  }
}

export default FavParkPage;
