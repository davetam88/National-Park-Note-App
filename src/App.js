import React, { Component } from "react";
import { Route } from "react-router-dom";
import MainContext from './MainContext';
import MainControl from "./components/MainControl";
import "./App.css";

class App extends Component {
  state = {
    activity: "",
    state: "",
    folders: [],
    // notes: [],
  };

  addNote = note => {
    this.setState({
      notes: [...this.state.notes, note],
    })
  }

  addFolder = folder => {
    this.setState({
      folders: [...this.state.folders, folder],
    })
  }

  MainControlFormCB = (activity, state) => {
    this.setState({
      state: state,
      activity: activity,
    })
  }

  render() {

    const contextValue = {
      activity: this.state.activity,
      MainControlFormCB: this.MainControlFormCB,
      // folders: this.state.folders,
      // notes: this.state.notes,
      // addFolder: this.addFolder,
      // addNote: this.addNote,
      // deleteNote: this.deleteNote,
    }

    return (
      <div className="container">
        <MainContext.Provider value={contextValue}>
          {/* connect state to context using value */}
          {/* <Context.Provider value={this.state}> */}
          <header className="bg-callout">
            <Route path="/" component={MainControl} />
          </header>
          <main>
          </main>
        </MainContext.Provider>
      </div >
    );
  }
}


export default App;
