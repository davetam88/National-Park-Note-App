import React from 'react'

const MainContext = React.createContext({
  folders: [],
  // notes: [],
  error: null,
  addNote: () => { },

  MainControlFormCB: () => { },

  // addFolder: () => { },
  // deleteNote: () => { },

})

export default MainContext
