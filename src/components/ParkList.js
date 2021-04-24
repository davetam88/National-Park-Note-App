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
      fetchDataMainPark: {},
      NewData: {},
      EntryData: {},
    }
  }


  /*** display  */
  handleMorePictureClicked() {

    // $('.cls-results').on('click', '.btn-more-pic', event => {
    //   const idx = getItemIdFromElement(event.currentTarget);
    //   // get the image from the store and ren
    //   let fetchDataMainPark = NewData[idx].fetchDataMainPark;
    //   displayMorePicture(fetchDataMainPark);
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
    //   let parkName = NewData[idx].fetchDataMainPark.fullName;
    //   // get info and display it
    //   getVideoInfos(parkName);
    // });
  }


  render() {
    const { fetchDataMainPark } = this.context;
    const { stateCode, activity } = this.context;

    if (Object.keys(fetchDataMainPark).length === 0)
    {
      return (
        <>
        </>
      )
    }
    const dataLen = fetchDataMainPark.data.length;

    return (
      <>

        <h3 className="overlay-section-heading">
          There Are <em>{dataLen}</em> Parks That Matches Your Search Criteria<br />
          <em>StateCode = {stateCode}  :  Activity = {activity}</em>
        </h3>
        <div className="group-container wrap">
          {
            fetchDataMainPark.data.map((element, idx) => (
              <ParkItem key={idx} itemData={element} history={this.props.history} />
            ))
          }
        </div>
        {/* {this.displayParksInfo(stateCode, activity)} */}
      </>
    );
  }
}

export default ParkList;
