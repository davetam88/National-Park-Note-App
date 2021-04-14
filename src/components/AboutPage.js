import React, { Component } from 'react'
import MainControl from './MainControl';
import '../App.css'
import AboutContent from './AboutContent';
import NavBar from './NavBar';

class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { history } = this.props;

    return (
      <>
        <MainControl history={history} />
        <NavBar />
        <AboutContent />
      </>
    )
  }
}

export default AboutPage;


