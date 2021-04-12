import React, { Component } from 'react';
import ParkItem from "./ParkItem";
import MainContext from '../MainContext';
import '../App.css'

class ParkList extends Component {
  static contextType = MainContext;
  constructor(props) {
    super(props);

    this.state = {
      // stateCode: "AL",
      // activity: "All",
      responseJson: {},
      NewData: {},
      EntryData: {},
    }
  }

  /*** display  */

  handleMorePictureClicked() {

    // $('.cls-results').on('click', '.btn-more-pic', event => {
    //   const idx = getItemIdFromElement(event.currentTarget);
    //   // get the image from the store and ren
    //   let responseJson = NewData[idx].responseJson;
    //   displayMorePicture(responseJson);
    // });

  }

  handleGoBackButtonClicked() {
    // $('.cls-results').on('click', '.btn-go-back', event => {
    //   displayParksInfo(EntryData.ResponseJson, EntryData.stateCode, EntryData.activity);
    // });
  }

  handleVideoClicked() {
    // $('.cls-results').on('click', '.btn-video', event => {
    //   const idx = getItemIdFromElement(event.currentTarget);
    //   // get the park info from the big data
    //   let parkName = NewData[idx].responseJson.fullName;
    //   // get info and display it
    //   getVideoInfos(parkName);
    // });
  }

  /*** fetch data */
  formatParkInfoQueryParams(params) {

    const queryItems = Object.keys(params)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    return queryItems.join('&');
  }

  componentDidMount() {
    const { stateCode, activity } = this.context;
    this.getParkInfos(stateCode, activity, 2);
  }

  getParkInfos(stateCode, activity, maxResults = 4) {
    const { responseJson } = this.state;
    // ok key
    const api_key = 'nC3wQoBberQTpH9oGy9RZd3WPZRbbUw3eTCblSCb';

    // bad key
    // const api_key = 'nC3wQoBberQTpH9oGy9RZd3WPZRbbUw3eTCblSCbx';

    const searchURL = 'https://developer.nps.gov/api/v1/parks';

    const paramsNormal = {
      api_key: api_key,
      stateCode: stateCode,
      q: activity,
      limit: maxResults
    };

    const paramsAllActivity = {
      api_key: api_key,
      stateCode: stateCode,
      limit: maxResults
    };


    let paramsUse = paramsNormal;
    if (activity === "All")
    {
      paramsUse = paramsAllActivity;
    }

    const queryString = this.formatParkInfoQueryParams(paramsNormal);
    const parkURL = searchURL + '?' + queryString;


    fetch(parkURL)
      .then(response => {
        if (response.ok)
        {
          return response.json();

        }
        let errmsg = `${response.status} : ${response.statusText}`;
        throw new Error(errmsg);
      })
      .then(responseJson => {
        this.setState({
          responseJson
        })
        // displayParksInfo(responseJson, stateCode, activity)
      })
      .catch(err => {
        let errmsg = `Something went wrong: ${err.message}`;
        // alert(errmsg);
        // $('#js-error-message').text(`Something went wrong: ${err.message}`);
      });
  }


  render() {
    const { responseJson } = this.state;
    const { stateCode, activity } = this.context;


    if (Object.keys(responseJson).length === 0)
    {
      return (
        <>
        </>
      )
    }


    const dataLen = responseJson.data.length;

    return (
      <>

        <h3 class="overlay-section-heading">
          There Are <em>{dataLen}</em> Parks That Matches Your Search Criteria<br />
          <em>StateCode = {stateCode}  :  Activity = {activity}</em>
        </h3>
        <div class="group-container wrap">
          {
            responseJson.data.map((element, idx) => (
              <ParkItem key={idx} itemData={element} />
            ))
          }
        </div>
        {/* {this.displayParksInfo(stateCode, activity)} */}
      </>
    );
  }
}

export default ParkList;
