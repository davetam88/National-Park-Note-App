import React, { Component } from 'react';
import FavParkItem from "./FavParkItem";
import MainContext from '../MainContext';
import '../App.css'

class FavParkList extends Component {

  static contextType = MainContext;

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const { data, history, favParks } = this.props;

    if (Object.keys(data).length === 0)
    {
      return (
        <>
        </>
      )
    }
    const dataLen = data.data.length;

    return (
      <>
        <h3 className="overlay-section-heading">
          My Favorvite Parks <em>({dataLen})</em><br />
        </h3>
        <div className="group-container wrap">
          {
            data.data.map((element, idx) => (
              <FavParkItem key={idx} itemData={element} history={history} favParks={favParks} />
            ))
          }
        </div>
      </>
    );
  }
}

export default FavParkList;
