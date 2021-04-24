import React, { Component } from 'react';
import ParkItem from "./ParkItem";
import MainContext from '../MainContext';
import '../App.css'

class FavParkList extends Component {
  static contextType = MainContext;

  constructor(props) {
    super(props);
    this.state = {
      fetchDataFavPark: {},
      // NewData: { },
      // EntryData: { },
    }
  }

  render() {
    const { fetchDataFavPark } = this.context;
    const { stateCode, activity } = this.context;


    if (Object.keys(fetchDataFavPark).length === 0)
    {
      return (
        <>
        </>
      )
    }
    const dataLen = fetchDataFavPark.data.length;

    return (
      <>
        <h3 className="overlay-section-heading">
          There Are <em>{dataLen}</em> Parks That Matches Your Search Criteria<br />
          <em>StateCode = {stateCode}  :  Activity = {activity}</em>
        </h3>
        <div className="group-container wrap">
          {
            fetchDataFavPark.data.map((element, idx) => (
              <ParkItem key={idx} itemData={element} history={this.props.history} />
            ))
          }
        </div>
        {/* {this.displayParksInfo(stateCode, activity)} */}
      </>
    );
  }
}

export default FavParkList;
