import React, { Component } from "react";
import { Route } from "react-router-dom";
import MainContext from './MainContext';
import HomePage from "./components/HomePage";
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import STORE from './STORE'
import "./App.css";
import AboutPage from './components/AboutPage';

class App extends Component {
  state = {
    store: STORE,
    activity: "All",
    stateCode: "AL",
    username: "",
    password: "",
    logInState: false,
  };

  MainControlFormCB = (activity, stateCode) => {

    this.setState({
      stateCode: stateCode,
      activity: activity,
    })
  }

  RegistrationCB = (username, password) => {

    this.setState({
      username: username,
      password: password,
      logInState: true,
    })
    // store information to database
  }

  render() {

    const contextValue = {
      store: STORE,
      stateCode: this.state.stateCode,
      activity: this.state.activity,
      username: this.state.username,
      password: this.state.password,
      MainControlFormCB: this.MainControlFormCB,
      RegistrationCB: this.RegistrationCB,
      logInState: this.state.logInState,
    }

    return (
      <div className="container">
        <MainContext.Provider value={contextValue}>
          <Route exact path="/" component={HomePage} />

          <Route path="/about" component={AboutPage} />

          <Route path="/login" component={LoginPage} />

          <Route path="/registration" component={RegistrationPage} />
          <main>
          </main>
        </MainContext.Provider>
      </div >
    );
  }
}

export default App;
