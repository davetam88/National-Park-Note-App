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
        value: "All",
      },
      stateName: {
        value: "AL",
      },
    };
  }

  // event handler (selection)
  updateActivity(activity) {
    this.setState({ activity: { value: activity } }, () => {
    });
  }

  updateState(stateName) {
    this.setState({ stateName: { value: stateName } }, () => {
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { activity, stateName } = this.state;
    this.context.MainControlFormCB(activity, stateName);
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
                <label htmlFor="js-state-name" className="main-label"> State Name </label>
                <select className="itemRight field-qty-num" id="js-state-name"
                  onChange={(e) => this.updateState(e.target.value)}
                >
                  <States />
                </select>
              </div>

              <div className="field">
                <label htmlFor="js-activities" className="main-label"> Activities</label>
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



