import React, { useContext, useState } from 'react';

import MainContext from '../MainContext';
import '../App.css'
import './FavForm.css'

export default function AddFavNote({ history, favParks }) {
  const favContext = useContext(MainContext)
  const [parkCode] = useState(favContext.parkCode)
  const [rating, setRating] = useState("")
  const [note, setNote] = useState("")


  let favParksNew = {
    parkCode: favContext.parkCode,
    stateCode: favContext.stateCode,
    parkName: favContext.parkName,
    rating: 1,
    note: "",
    stateName: "",
    activity: favContext.activity,
    stopNumber: favParks.length,
  }


  let handleCancel = () => {
    history.push('/')
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    favParksNew.rating = rating;
    favParksNew.note = note;
    favParksNew.parkCode = parkCode;
    favContext.AddFavNoteSubmitCB(favParksNew)
    history.push('/')
  }

  return (
    <>
      <main>
        <div className="FavPark-form-container">
          <form className="FavPark-form"
            onSubmit={handleSubmit}
          >
            <h2>

              Add Note For Park<br />
              <div style={{ paddingTop: "4px", color: "limegreen" }}>
                {localStorage.getItem("park")}
              </div>

            </h2>
            <hr />

            <label htmlFor="content">Rating</label>

            <div style={{
              textAlign: "center"
            }}>

              <select required="" id="FavForm-Rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                name="FavForm-Rating">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>


              <hr />
              <label htmlFor="content">Note</label>
              <textarea id="content" name="content" rows="4" cols="50"
                onChange={(e) => setNote(e.target.value)}
                spellCheck="false"></textarea>


              <div className="FavPark-form-buttons-wrapper">
                <button type="reset">Reset</button>
                <button type="submit">Submit</button>
                <button type='button' onClick={handleCancel}>
                  Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}


