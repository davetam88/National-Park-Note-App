import React from 'react'


const MainContext = React.createContext({
  history: {},
  fetchDataMainPark: {},
  fetchDataFavPark: {},
  users: [],
  parks: [],
  activityOptions: [],
  stateOptions: [],
  favOrderByOptoins: [],

  error: null,
  stateCode: "",
  activity: "",
  username: "",
  password: "",
  logInState: false,
  fetchErrMsg: "",
  displayFavPage: "",


  ActivityCB: () => { },
  StateCodeCB: () => { },
  MainControlFormCB: () => { },
  RegistrationCB: () => { },
  LoginCB: () => { },
  SaveParkCB: () => { },
  favOrderByCB: () => { },

  fetchFavParkInfosCB: () => { },
})

export default MainContext
