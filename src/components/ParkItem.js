import React, { Component } from 'react';
import MainContext from '../MainContext';
import '../App.css'

class ParkItem extends Component {
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

    if (this.context.logInState)
    {
      if (this.context.savedPark)
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
              onClick={e => this.context.MainParkSaveButtonCB(fullName, parkCode, history)}
            > Save</button>
          </>
        )
      }
    }
  }

  render() {
    const { itemData, history } = this.props;

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
        <div className="park-info-title-container">
          <h3>{itemData.fullName}</h3>
        </div>

        <img src={itemData.images[0].url} alt={itemData.fullName} />

        <p>{itemData.description}</p>

        <p><b>WebLink</b> : <a href={itemData.url}> {itemData.fullName}</a></p>

        <p>
          <b>HQ Address</b> : {siteAddress}
        </p>
        <button className="btn-generic " type="button" > More Picture</button >
        <button className="btn-generic " type="button">Video</button>
        {this.renderButtons(itemData.parkCode, itemData.fullName, history)}
      </div>

    )

  }

}
export default ParkItem;



