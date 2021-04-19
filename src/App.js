import React, { Component } from "react";
import { Route } from "react-router-dom";
import MainContext from './MainContext';
import HomePage from "./components/HomePage";
import PicturePage from "./components/PicturePage";
import AboutPage from './components/AboutPage';
import FavParkPage from './components/FavParkPage';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import STORE from './STORE'
import "./App.css";


class App extends Component {
  state = {
    history: {},
    responseJson: {},
    users: STORE.users,
    parks: STORE.parks,
    stateOptions: STORE.stateOptions,
    activityOptions: STORE.activityOptions,

    activity: "All",
    stateCode: "AL",
    username: "",
    password: "",

    // logInState: false,
    logInState: true,
    savedPark: false,
    fetchErrMsg: "",
    displayFavPage: false,

  };

  ActivityCB = (activity) => {
    // this.state.activity = activity;
    this.setState({ activity })
  }

  StateCodeCB = (stateCode) => {
    // this.state.stateCode = stateCode;
    this.setState({ stateCode })
  }


  MainControlFormCB = () => {
    const { stateCode, activity } = this.state;
    this.fetchParkInfos(stateCode, activity, 20);
    // this.state.activity = activity;
  }


  RegistrationCB = (username, password, idx) => {

    let currentUser = {
      // id: idx,
      id: "3",
      username: username,
      password: password,
    }


    this.setState({
      users: [
        ...this.state.users,
        currentUser
      ],
      username: username,
      logInState: true,
    })

    // store information to database
  }


  LoginCB = (username, password) => {

    this.setState({
      username: username,
      password: password,
      logInState: true,
    })
    // store information to database
  }

  SaveParkCB = () => {
    this.setState({

    })
  }

  componentDidMount() {
    const { stateCode, activity } = this.state;

    this.fetchParkInfos(stateCode, activity, 20);
  }

  /*** fetch data */

  formatParkInfoQueryParams(params) {

    const queryItems = Object.keys(params)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    return queryItems.join('&');
  }

  fetchParkInfos(stateCode, activity, maxResults = 4) {
    this.state.fetchErrMsg = "";

    const { responseJson } = this.state;
    // ok key
    const api_key = 'nC3wQoBberQTpH9oGy9RZd3WPZRbbUw3eTCblSCb';

    // bad key
    // const api_key = 'nC3wQoBberQTpH9oGy9RZd3WPZRbbUw3eTCblSCbx';

    const searchURL = 'https://developer.nps.gov/api/v1/parks';

    const paramsNormal = {
      api_key: api_key,
      stateCode: stateCode,
      q: activity,
      limit: maxResults
    };

    const paramsAllActivity = {
      api_key: api_key,
      stateCode: stateCode,
      limit: maxResults
    };


    let paramsUse = paramsNormal;
    if (activity === "All")
    {
      paramsUse = paramsAllActivity;
    }

    const queryString = this.formatParkInfoQueryParams(paramsNormal);
    const parkURL = searchURL + '?' + queryString;

    fetch(parkURL)
      .then(response => {
        if (response.ok)
        {
          return response.json();

        }
        let errmsg = `${response.status} : ${response.statusText}`;
        throw new Error(errmsg);
      })
      .then(responseJson => {
        // this.state.responseJson = responseJson;
        this.setState({
          activity: activity,
          stateCode: stateCode,
          responseJson: responseJson
        })
        // displayParksInfo(responseJson, stateCode, activity)
      })
      .catch(err => {
        let errmsg = `Something went wrong: ${err.message}`;
        alert(errmsg);
      });
  }


  render() {

    const contextValue = {
      history: this.props.history,
      responseJson: this.state.responseJson,
      users: this.state.users,
      stateOptions: this.state.stateOptions,
      activityOptions: this.state.activityOptions,
      stateCode: this.state.stateCode,
      activity: this.state.activity,
      username: this.state.username,
      password: this.state.password,
      logInState: this.state.logInState,
      fetchErrMsg: this.state.fetchErrMsg,

      displayFavPage: this.state.displayFavPage,

      MainControlFormCB: this.MainControlFormCB,
      RegistrationCB: this.RegistrationCB,
      LoginCB: this.LoginCB,
      SaveParkCB: this.SaveParkCB,
      ActivityCB: this.ActivityCB,
      StateCodeCB: this.StateCodeCB,
    }



    return (
      <div className="container">
        <MainContext.Provider value={contextValue}>

          <Route exact path="/" component={HomePage} />

          <Route path="/picture" component={PicturePage} />

          <Route path="/about" component={AboutPage} />

          <Route path="/login" component={LoginPage} />

          <Route path="/favpark" component={FavParkPage} />

          < Route
            path="/logout"
            render={routeProps => {
              this.setState({
                logInState: false
              })
              routeProps.history.push('/');
              return null;
            }}
          />

          <Route path="/registration" component={RegistrationPage} />

          {/* todo - add page not found page */}

        </MainContext.Provider>
      </div >
    );
  }
}

export default App;
