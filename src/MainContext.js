import React from 'react'
// import STORE from './STORE'

const MainContext = React.createContext({
  folders: [],
  // notes: [],
  // store: STORE,
  error: null,
  username: "",
  password: "",
  logInState: false,
  MainControlFormCB: () => { },
  RegistrationCB: () => { },

  // addFolder: () => { },
  // deleteNote: () => { },

})

export default MainContext
