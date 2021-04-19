import React from 'react'
// import STORE from './STORE'

const MainContext = React.createContext({
  history: {},
  responseJson: {},
  users: [],
  parks: [],
  stateOptions: [],
  activityOptions: [],
  error: null,
  stateCode: "",
  activity: "",
  username: "",
  password: "",
  logInState: false,
  fetchErrMsg: "",
  displayFavPage: "",

  MainControlFormCB: () => { },
  ActivityCB: () => { },
  StateCodeCB: () => { },

  RegistrationCB: () => { },
  LoginCB: () => { },
  SaveParkCB: () => { },

})

export default MainContext
