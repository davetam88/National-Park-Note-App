import React from 'react'

const MainContext = React.createContext({
  folders: [],
  // notes: [],
  error: null,
  MainControlFormCB: () => { },
  RegistrationCB: () => { },
  
  // addFolder: () => { },
  // deleteNote: () => { },

})

export default MainContext
