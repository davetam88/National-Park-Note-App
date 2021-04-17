import React, { Component } from 'react';
import '../App.css'
import MainControl from './MainControl';
import NavBar from "./NavBar";

export default function CommonControl(props) {
  const { logInState, displayFavPage, username } = props;
  return (
    <>
      <MainControl
        logInState={logInState}
        displayFavPage={displayFavPage}
      />
      <NavBar
        username={username}
        logInState={logInState}
      />
    </>
  )
}