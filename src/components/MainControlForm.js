import React, { Component } from 'react';
import MainContext from '../MainContext';
import { Link } from 'react-router-dom'
import config from '../config';
import PropTypes from 'prop-types';
// import States from '../States.js';
// import Activities from '../Activities';
import { withRouter } from 'react-router-dom';


class MainControlForm extends Component {
  static contextType = MainContext;
  constructor(props) {
    super(props);
    this.state = {
      // stateCode: "",
      // activity: "",
    };
  }

  static defaultProps = {
    history: {
      push: () => { },
    },
  };


  handleChange(e) {
    console.log("-----------Fruit Selected!!");
    this.setState({ fruit: e });
  }



  updateState(xx) {

    // stateCode
    // this.context.StateCodeCB(stateCode)
  }

  updateActivity(activity) {
    // not use 
  }


  handleSubmit = (e) => {
    e.preventDefault();

    this.context.MainControlFormCB();
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
    const { ActivityCB, StateCodeCB, activity, stateCode, stateOptions, activityOptions } = this.context;

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

              {/* state */}
              <div className="field">
                <div className="select-container">
                  <label htmlFor="js-activities" className="main-label"> State Name</label>
                  <select value={stateCode}
                    className="itemRight field-qty-num"
                    onChange={(e) => StateCodeCB(e.target.value)}
                  >
                    {stateOptions.map((option, idx) => (

                      <option key={idx} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* activity */}
              <div className="field">
                <label htmlFor="js-activities" className="main-label"> Activities</label>
                <select value={activity}
                  className="itemRight field-qty-num"
                  onChange={(e) => ActivityCB(e.target.value)}
                >
                  {activityOptions.map((option, idx) => (
                    <option key={idx} value={option.value}>{option.label}</option>
                  ))}
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

// export default MainControlForm;
export default withRouter(MainControlForm);



