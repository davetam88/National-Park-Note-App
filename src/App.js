import React, { Component } from "react";
import { Route } from "react-router-dom";
import MainContext from './MainContext';
import MainControl from "./components/MainControl";
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import MainControlForm from './components/MainControlForm';
import "./App.css";
import AboutPage from './components/AboutPage';

class App extends Component {
  state = {
    activity: "",
    stateName: "",
    folders: [],
    logInState: false,
  };

  MainControlFormCB = (activity, stateName) => {

    this.setState({
      stateName: stateName,
      activity: activity,
    })
  }

  render() {
    const contextValue = {
      state: this.state.stateName,
      activity: this.state.activity,
      MainControlFormCB: this.MainControlFormCB,
      // addNote: this.addNote,
      // deleteNote: this.deleteNote,
    }

    return (
      <div className="container">
        <MainContext.Provider value={contextValue}>
          <Route exact path="/" component={MainControl} />
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
