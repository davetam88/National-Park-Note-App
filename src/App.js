import React, { Component } from "react";
import { Route } from "react-router-dom";
import MainContext from './MainContext';
import HomePage from "./components/HomePage";
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
// import MainControl from "./components/MainControl";
// import MainControlForm from './components/MainControlForm';
import STORE from './STORE'
import "./App.css";
import AboutPage from './components/AboutPage';

class App extends Component {
  state = {
    store: STORE,
    activity: "",
    stateName: "",
    username: "",
    password: "",
    logInState: false,
  };

  MainControlFormCB = (activity, stateName) => {

    this.setState({
      stateName: stateName,
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
      stateName: this.state.stateName,
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
