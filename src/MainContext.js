import React from 'react'


const MainContext = React.createContext({
  fetchDataMainPark: {},
  fetchDataFavPark: {},
  users: [],
  favParks: [],

  activityOptions: [],
  stateOptions: [],
  favOrderByOptoins: [],

  error: null,

  activity: "",
  stateCode: "",
  parkName: "",
  parkCode: "",
  parkData: "",

  username: "",
  password: "",

  logInState: false,
  savedPark: false,
  fetchErrMsg: "",
  displayFavPage: "",

  ActivityCB: () => { },
  StateCodeCB: () => { },
  MainControlFormCB: () => { },
  RegistrationCB: () => { },
  LoginCB: () => { },
  SaveParkCB: () => { },
  FavOrderByCB: () => { },
  SaveParkButtonCB: () => { },
  ParkSelectedCB: () => { },
  AddFavNoteSubmitCB: () => { },
  ViewVideoBtnCB: () => { },
  ViewPictureBtnCB: () => { },

  FetchFavParkInfosCB: () => { },
})

export default MainContext
