
import React, { Component } from 'react';
import MainContext from '../MainContext';
import { Link } from 'react-router-dom'
import config from '../config';
import PropTypes from 'prop-types';
// import States from '../States.js';
// import Activities from '../Activities';
// import { withRouter } from 'react-router-dom';

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
          < Link to='/' >
            <span style={styles}>
              Search for More Parks
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

    const { favOrderByCB, favOrderByOptoins } = this.context;

    return (
      <>
        <h3 className="filter-title"> 
        Sort Your Favorite Parks by The Filters Below
       
        {this.renderGoFavLink()}
        </h3>

        <div class="nav-myFav-radio-btn-container">

          <button class="btn-generic-save" type="button">Park Name</button>
          <span>  </span>
          <button class="btn-generic 0" type="button">Rating</button>
          <span>  </span>
          <button class="btn-generic 0" type="button">State Name</button>
          <span>  </span>
          <button class="btn-generic 0" type="button"> Stop Number </button>
          <span>  </span>
          <button class="btn-generic 0" type="button"> Activity </button>
          <span>  </span>
        </div>
        <br />
        < div id="js-error-message-main" className="error-message-main" >
          {this.context.fetchErrMsg}
        </div >
      </>
    );
  }
}

export default MainControlForm;
// export default withRouter(MainControlForm);



