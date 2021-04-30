import React, { Component } from 'react';
import MainContext from '../MainContext';
import { findFavParkByParkCode } from './Helpers';
import '../App.css'

class FavParkItem extends Component {
  static contextType = MainContext;

  parkCodeSelected = "";

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleModifyButton = () => {
    this.props.history.push('/')
  };


  handleDeleteButton = () => {

    // this.props.history.push('/')
  };

  renderButtons(parkCode, fullName, history) {


    if (findFavParkByParkCode(this.context.favParks, parkCode) || 0)
    {
      return (
        <>
          <button className="btn-generic-mod " type="button"
            onClick={e => this.handleModifyButton()}  >
            Modify</button>

          <button className="btn-generic-del " type="button"
            onClick={e => this.handleDeleteButton()}
          > Delete</button>
        </>
      )
    } else
    {
      return (
        <>
          <button className="btn-generic-save" type="button"
            onClick={e => this.context.SaveParkButtonCB(fullName, parkCode, history)}
          > Save</button>
        </>
      )
    }
  }



  render() {
    const { itemData, history } = this.props;
    const favParkCur = (findFavParkByParkCode(this.context.favParks, itemData.parkCode) || 0)


    const note = favParkCur.note;
    const parkNumber = favParkCur.parkNumber;
    const rating = favParkCur.rating;
    const activity = favParkCur.activity;

    let siteAddress = "";
    if (itemData.addresses.length === 0)
      siteAddress = 'No Address Information For This Park, Sorry';
    else
    {
      siteAddress = `
            ${itemData.addresses[0].line1}
            ${itemData.addresses[0].city},  ${itemData.addresses[0].stateCode} ${itemData.addresses[0].postalCode} 
            `;
    }


    return (
      <div className="item">
        <div className="fav-show-title">
          <h3>{itemData.fullName}</h3>
        </div>

        <div className="fav-show-stats">
          Park# {parkNumber}, Rating: {rating}, Activity: {activity}
        </div>
        <h3>Note</h3>
        <textarea className="fav-show-note" name="content" rows="4" cols="45" readOnly value={note}
        ></textarea>
        <br />
        <br />

        <img src={itemData.images[0].url} alt={itemData.fullName} />

        <p>{itemData.description}</p>
        <p><b>WebLink</b> : <a href={itemData.url}> {itemData.fullName}</a></p>

        <p>
          <b>HQ Address</b> : {siteAddress}
        </p>

        <button className="btn-generic " type="button"
          onClick={e => this.context.ViewPictureBtnCB(history, itemData.fullName, itemData)}
        > More Picture</button >

        <button className="btn-generic " type="button"
          onClick={e => this.context.ViewVideoBtnCB(history, itemData.fullName)}
        >Video</button>
        { this.renderButtons(itemData.parkCode, itemData.fullName, history)}
      </div >

    )

  }

}
export default FavParkItem;



