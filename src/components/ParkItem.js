import React, { Component } from 'react';
import MainContext from '../MainContext';
import '../App.css'

class ParkItem extends Component {
  static contextType = MainContext;
  constructor(props) {
    super(props);
    this.state = {

    }
  }



  // buttons can be save, modify
  handleFavButtons = (buttonName) => {
    // this.props.history.push('/')
  };


  renderButtons() {

    if (this.context.logInState)
    {
      if (this.context.savedPark)
      {
        return (
          <>
            <button className="btn-generic-mod " type="button"
              onClick={() => this.handleFavButtons('modify')}
            >Modify</button>
            <button className="btn-generic-del " type="button"
              onClick={() => this.handleFavButtons('delete')}
            > Delete</button>
          </>
        )
      } else
      {
        return (
          <>
            <button className="btn-generic-save" type="button"
              onClick={() => this.handleFavButtons('save')}
            > Save</button>
            <button className="btn-generic-del " type="button"
              onClick={() => this.handleFavButtons('delete')}
            > Delete</button>
          </>
        )
      }
    }
  }

  // onClick={() => this.context.setLang('klingon')}
  render() {
    const { idx, itemData, history } = this.props;
    let fullName = itemData.fullName;


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
        <button className="btn-generic {idx}" type="button" > More Picture</button >
        <button className="btn-generic {idx}" type="button">Video</button>
        {this.renderButtons()}
      </div>

    )


    /*

    */
    /*
          // let fullName = itemData.fullName;
  
  
    itemData :>> {id: "E8A0F0B6-983F-4B9A-9A67-BFF6F9E4204A", url: "https://www.nps.gov/natr/index.htm", fullName:
    "Natchez Trace Parkway", parkCode: "natr", description: "The Natchez Trace Parkway is a 444-mile recreation… horseback
    riding, and camping along the parkway.", …}
  
    */

  }

}

export default ParkItem;



