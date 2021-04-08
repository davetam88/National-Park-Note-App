import React, { Component } from 'react';
import MainContext from '../MainContext';
// import ValidationError from '../App/ValidationError';
// import AddNoteError from './AddNoteError';
import config from '../config';
import PropTypes from 'prop-types';
import States from '../States.js';
import Activities from '../Activities';

class MainControlForm extends Component {
  static contextType = MainContext;
  constructor(props) {
    super(props);
    this.state = {
      activity: {
        value: "all",
      },
      state: {
        value: "Alabama",
      },
    };
  }

  updateActivity(activity) {
    this.setState({ activity: { value: activity } }, () => {
    });
  }

  updateState(state) {
    this.setState({ state: { value: state } }, () => {
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { activity, state } = this.state;
    this.context.MainControlFormCB(activity, state);
  }

  render() {
    const { folders = [] } = this.context;

    return (
      <>
        <h3 className="filter-title"> Select your Filter Please</h3>
        <form className="cls-form" id="js-form"
          onSubmit={this.handleSubmit}
        >
          <div className="center wrap">
            <div className="field-group">
              <div className="field">
                <label htmlFor="js-state-name"> State Name </label>
                <select className="itemRight field-qty-num" id="js-state-name"
                  onChange={(e) => this.updateState(e.target.value)}
                >
                  <States />
                </select>
              </div>

              <div className="field">
                <label htmlFor="js-activities"> Activities</label>
                <select className="itemRight field-qty-num" id="js-activities"
                  onChange={(e) => this.updateActivity(e.target.value)}
                >
                  <Activities />
                </select>
              </div>

              <div className="filter-button-section">
                <button type="reset" id="reset">Reset</button>
                <input type="submit" id="submit" value="Submit" />
              </div>

              <div id="js-error-message" className="error-message">
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default MainControlForm;



