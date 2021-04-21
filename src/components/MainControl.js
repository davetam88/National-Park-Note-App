
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import MainContext from '../MainContext';
import '../App.css'

import MainControlForm from './MainControlForm';
import FavControlForm from './FavControlForm';
// import NavBar from "./NavBar";




class MainControl extends Component {

  renderLoginUser(logInState) {

    let styles = {
      'a:link': 'color: white',
      'marginLeft': '8px',
      'color': 'limegreen',
    };


    if (logInState === false)
      return (
        <>
          <span style={{ paddingLeft: 12 }}>
            Plan Your Trip by
          </span>

          < Link to='/registration' >
            <span style={styles}>
              Creating Your Own User Account
                  </span>
          </Link >

          <span style={{ paddingLeft: 12 }}>
            or
          </span>
          < Link to='/login' >
            <span style={styles}>
              Login to Your Account
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
    const { logInState, doFavPage } = this.props;

    return (
      <>
        <header className="bg-callout">
          <h1>National Park Trip Planner</h1>
          <div className='no-login'>
            <h2 className="app-title"> All The Information You Need to Know About Your Favorite National Park in One Easy to Use App.
            Narrow Down Your Search by State And Activities.
            {this.renderLoginUser(logInState)}
            </h2>
          </div>

          {(doFavPage === "true")
            ? <FavControlForm />
            // : <MainControlForm history="{history}" />
            : <MainControlForm />
          }

          {(this.context.fetchErrMsg)
            ? <div class="error-message-main">this.context.fetchErrMsg</div>
            : <> </>}
        </header>
      </>
    );
  }
}

MainControl.propTypes = {
  /*
    bookmarks: PropTypes.arrayOf(PropTypes.object)
  */
};

export default MainControl;

