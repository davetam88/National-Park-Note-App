import React from 'react'

const MainContext = React.createContext({
  folders: [],
  // notes: [],
  error: null,
  MainControlFormCB: () => { },

  // addFolder: () => { },
  // deleteNote: () => { },

})

export default MainContext
