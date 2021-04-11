import React, { Component } from 'react';
import ParkItem from "./ParkItem";
import '../App.css'

class ParkList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stateCode: "AL",
      activities: "All",
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
    //   displayParksInfo(EntryData.ResponseJson, EntryData.stateCode, EntryData.activities);
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
    const { stateCode, activities } = this.state;
    this.getParkInfos(stateCode, activities, 1);
  }

  getParkInfos(stateCode, activities, maxResults = 4) {
    const { responseJson } = this.state;

    // ok key
    const api_key = 'nC3wQoBberQTpH9oGy9RZd3WPZRbbUw3eTCblSCb';

    // bad key
    // const api_key = 'nC3wQoBberQTpH9oGy9RZd3WPZRbbUw3eTCblSCbx';

    const searchURL = 'https://developer.nps.gov/api/v1/parks';

    const paramsNormal = {
      api_key: api_key,
      stateCode: stateCode,
      q: activities,
      limit: maxResults
    };

    const paramsAllActivities = {
      api_key: api_key,
      stateCode: stateCode,
      limit: maxResults
    };


    let paramsUse = paramsNormal;
    if (activities === "All")
    {
      paramsUse = paramsAllActivities;
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
        // displayParksInfo(responseJson, stateCode, activities)
      })
      .catch(err => {
        let errmsg = `Something went wrong: ${err.message}`;
        alert(errmsg);
        // $('#js-error-message').text(`Something went wrong: ${err.message}`);
      });
  }


  buildParkInfoItemElement(responseJson, idx) {

    let siteAddress = "";

    if (responseJson.data[idx].addresses.length === 0)
      siteAddress = 'No Address Information For This Park, Sorry';
    else
    {
      siteAddress = `
	  ${responseJson.data[idx].addresses[0].line1}
	  ${responseJson.data[idx].addresses[0].city},  ${responseJson.data[idx].addresses[0].stateCode} ${responseJson.data[idx].addresses[0].postalCode} 
	  `;
    }
    let fullName = responseJson.data[idx].fullName;
    let htmlCode = `
  <div class="item">
    <div class="park-info-title-container">
      <h3>${responseJson.data[idx].fullName}</h3>
    </div>
    <img src="${responseJson.data[idx].images[0].url}" alt="${fullName}">
      <p>${responseJson.data[idx].description}</p>
      <p><b>WebLink</b> : <a href="${responseJson.data[idx].url}"> ${responseJson.data[idx].fullName}</a>
        <p><b>HQ Address</b> : ${siteAddress}</p>
        <button class="btn-more-pic ${idx}" type="button">More Picture</button>
        <button class="btn-video ${idx}" type="button">Video</button>
  </div>`;

    return (htmlCode);
  }



  displayParksInfo(stateCode, activities) {
    // return (<p>junk</p>)
    let abc = "abc";
    // return (<p>junk{abc}</p>)


    const { NewData, EntryData, responseJson } = this.state;
    // debugger
    const dataLen = responseJson.data.length;
    // if there are previous results, remove them
    // $('#js-results').empty();
    // // remove previous error if any.
    // $('#js-error-message').text("");

    return (
      <h3 class="overlay-section-heading">

        There Are <em>{dataLen}</em> Parks That Matches Your Search Criteria<br />
        <em>StateCode = ${stateCode}  :  Activity = ${activities}</em>
      </h3>
    )



    let htmlCode = `
	  <h3 class="overlay-section-heading">
        There Are <em>${dataLen}</em> Parks That Matches Your Search Criteria<br>
          <em>StateCode = ${stateCode}  :  Activity = ${activities}</em>
</h3>
        <div class="group-container wrap">
          `;

    for (let idx = 0; idx < dataLen; idx++)
    {

      htmlCode = htmlCode + this.buildParkInfoItemElement(responseJson, idx);
      //  showNpsData(responseJson, i);
      NewData[idx] = new Object();
      NewData[idx].index = idx;
      NewData[idx].responseJson = responseJson.data[idx];
    }
    EntryData.stateCode = stateCode;
    EntryData.activities = activities;
    EntryData.ResponseJson = responseJson;

    // close the group-container div
    // page for park info
    htmlCode += `</div>`;

    return (htmlCode);

    // $('#js-results').append(htmlCode);
    // $('#js-results').removeClass('hidden');
  }

  render() {

    const { stateCode, activities, responseJson } = this.state;


    if (Object.keys(responseJson).length === 0)
    {
      return (
        <>
        </>
      )
    }

    return (
      <>
        <p>Component ParkList</p>
        {this.displayParksInfo(stateCode, activities)}
        <ParkItem />

      </>
    );
  }
}

export default ParkList;
