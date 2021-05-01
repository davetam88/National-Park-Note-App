import React, {
  useState,
  useContext,
  useEffect
} from "react";

import MainControl from './MainControl';
import NavBar from './NavBar';
import '../App.css'
import './FavForm.css'
import MainContext from '../MainContext';
import FavParkList from "./FavParkList";
import { findUserByUsername } from './Helpers';

export default function FavParkPage(props) {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const favContext = useContext(MainContext)
  const { parks } = favContext

  useEffect(() => {
    const { favParks, users, username } = favContext

    const user = findUserByUsername(users, username);
    let parkCodeList = getParkNamesBySavedParkIds(favParks, user.favParkIds)


    if (parkCodeList === "")
    {
      let errorMsg = `You Have Not Save Any Park Yet`;
      setError(errorMsg)
    }

    let searchURL = 'https://developer.nps.gov/api/v1/parks';
    let api_key = 'nC3wQoBberQTpH9oGy9RZd3WPZRbbUw3eTCblSCb';
    let limit = 20;
    let parkURL = `${searchURL}?parkCode=${parkCodeList}&limit=${limit}&api_key=${api_key}&`;

    /*** fetch data */

    fetch(parkURL)
      .then(response => {
        if (response.ok)
          return response.json();
        let errorMsg = `${response.status} : ${response.statusText}`;
        throw new Error(errorMsg);
      })
      .then(setData)
      .catch(err => {
        let errorMsg = `Something went wrong, ErrorMsg/ErrorCode : ${err.message}`;
        setError(errorMsg)
      });
  }, [favContext]);


  if (data || error)
  {
    return (
      <>
        <MainControl
          history={props.history}
          logInState={favContext.logInState}
          doFavPage={true}
          username={favContext.username}
        />
        <NavBar
          username={favContext.username}
          logInState={favContext.logInState}
        />
        <main>
          <section id="js-results" className="bg-main-display cls-results">
            {/* error or content */}
            {error
              ?
              <p style={{
                fontSize: '1.2em', color: "red"
              }}>{error}</p>
              :
              <FavParkList history={props.history} data={data} parks={parks}
              />
            }
          </section>
        </main>
      </>
    );
  } else
  {
    return null;
  }
}

function getParkNamesBySavedParkIds(parks, favParkIds) {

  let parkCodeTemp = [];
  let idz = 0;
  for (let idx = 0; idx < parks.length; idx++)
    for (let idy = 0; idy < favParkIds.length; idy++)
      if (parks[idx].favParkId === favParkIds[idy])
      {
        parkCodeTemp[idz++] = parks[idx].parkCode;
        break;
      }
  if (idz)
    return (parkCodeTemp.join(","))
  else
    return ("")
}



