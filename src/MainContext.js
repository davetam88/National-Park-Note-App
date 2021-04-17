import React from 'react'
// import STORE from './STORE'

const MainContext = React.createContext({
  history: {},
  responseJson: {},
  users: [],
  error: null,
  stateCode: "",
  activity: "",
  username: "",
  password: "",
  logInState: false,
  fetchErrMsg: "",
  displayFavPage: "",

  MainControlFormCB: () => { },
  RegistrationCB: () => { },
  LoginCB: () => { },

})

export default MainContext
