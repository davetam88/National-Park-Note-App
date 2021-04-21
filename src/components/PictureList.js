import React, { Component } from 'react';
import PictureItem from "./PictureItem";
import MainContext from '../MainContext';
import '../App.css'

class PictureList extends Component {
  static contextType = MainContext;
  constructor(props) {
    super(props);

    this.state = {
      // stateCode: "AL",
      // activity: "All",
      firstFetch: false,
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

  // componentDidMount() {
  //   const { stateCode, activity } = this.state;
  //   this.fetchParkInfos(stateCode, activity);
  //   this.state.firstFetch = true;
  // }


  render() {
    const { responseJson } = this.context;
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
        <h3 className="overlay-section-heading">
          There Are <em>{dataLen}</em> Pictures That Matches Your Search Criteria<br />
          <em>StateCode = {stateCode}  :  Activity = {activity}</em>
        </h3>
        <div className="group-container wrap">
          {
            responseJson.data.map((element, idx) => (
              <PictureItem key={idx} itemData={element} />
            ))
          }
        </div>
        {/* {this.displayParksInfo(stateCode, activity)} */}
      </>
    );
  }
}

export default PictureList;
