import React, { Component } from 'react';
import MainContext from '../MainContext';
// import ValidationError from '../App/ValidationError';
// import AddNoteError from './AddNoteError';
import { Link } from 'react-router-dom'
import config from '../config';
import PropTypes from 'prop-types';
import States from '../States.js';
import Activities from '../Activities';
import { withRouter } from 'react-router-dom';

class MainControlForm extends Component {
  static contextType = MainContext;
  constructor(props) {
    super(props);
    this.state = {
      activity: "",
      stateCode: "",
    };
  }

  static defaultProps = {
    history: {
      push: () => { },
    },
  };

  // event handler (selection)
  updateActivity(activity) {
    this.state.activity = activity;

    // this.setState({ activity: activity }, () => {
    // });
  }

  updateState(stateCode) {
    this.state.stateCode = stateCode;
    // this.setState({ stateCode: stateCode }, () => {
    // });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { activity, stateCode } = this.state;

    this.context.MainControlFormCB(activity, stateCode);
    this.props.history.push('/')

  }



  renderGoFavLink() {
    let styles = {
      'a:link': 'color: white',
      'marginLeft': '8px',
      'color': 'limegreen',
    };

    if (this.context.logInState)
      return (
        <>
          <span> </span>
          or
          < Link to='/favpark' >
            <span style={styles}>
              Go to My Favorite Parks Page
                  </span>
          </Link >
        </>
      )
    else
    {
      return (<></>)
    }
  }




  render() {

    const { activity, stateCode } = this.context;
    this.state.activity = activity;
    this.state.stateCode = stateCode;


    return (
      <>
        <h3 className="filter-title"> Please Select your Filter
        {this.renderGoFavLink()}
        </h3>

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

              <div id="js-error-message-main" className="error-message-main">
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default withRouter(MainControlForm);



