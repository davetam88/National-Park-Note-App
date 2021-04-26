import React from 'react'


const MainContext = React.createContext({
  history: {},
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
  parkSelected: "",

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
  favOrderByCB: () => { },
  MainParkSaveButtonCB: () => { },
  ParkSelectedCB: () => { },
  AddFavNoteSubmitCB: () => { },

  fetchFavParkInfosCB: () => { },
})

export default MainContext
