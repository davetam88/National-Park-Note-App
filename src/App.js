import React, { Component } from "react";
import { Route } from "react-router-dom";
import MainContext from './MainContext';
import HomePage from "./components/HomePage";
import PicturePage from "./components/PicturePage";
import AboutPage from './components/AboutPage';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import STORE from './STORE'
import "./App.css";


class App extends Component {
  state = {
    history: {},
    responseJson: {},
    users: STORE.users,
    activity: "All",
    stateCode: "AL",
    username: "",
    password: "",
    logInState: true,
    displayFavPage: false,
  };


  MainControlFormCB = (activity, stateCode) => {
    this.fetchParkInfos(stateCode, activity, 20);
    // this.state.activity = activity;
    // this.state.stateCode = stateCode;
    this.setState({
      stateCode: stateCode,
      activity: activity,
    })
  }


  RegistrationCB = (username, password) => {

    let currentUser = {
      id: '3',
      username: username.value,
      password: password.value,
    }

    this.setState({
      users: [
        ...this.state.users,
        currentUser
      ],
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
          responseJson: responseJson
        })
        // displayParksInfo(responseJson, stateCode, activity)
      })
      .catch(err => {
        let errmsg = `Something went wrong: ${err.message}`;
        // alert(errmsg);
        // $('#js-error-message').text(`Something went wrong: ${err.message}`);
      });
  }


  render() {

    const contextValue = {
      history: this.props.history,
      responseJson: this.state.responseJson,
      users: this.state.users,
      stateCode: this.state.stateCode,
      activity: this.state.activity,
      username: this.state.username,
      password: this.state.password,
      logInState: this.state.logInState,

      displayFavPage: this.state.displayFavPage,

      MainControlFormCB: this.MainControlFormCB,
      RegistrationCB: this.RegistrationCB,
      LoginCB: this.LoginCB,

    }


    return (
      <div className="container">
        <MainContext.Provider value={contextValue}>

          <Route exact path="/" component={HomePage} />

          <Route path="/picture" component={PicturePage} />

          <Route path="/about" component={AboutPage} />

          <Route path="/login" component={LoginPage} />

          <Route path="/registration" component={RegistrationPage} />

        </MainContext.Provider>
      </div >
    );
  }
}

export default App;
