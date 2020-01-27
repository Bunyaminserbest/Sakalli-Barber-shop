import React, { Component, Fragment } from 'react';
import Navbar from './components/Navbar/index';
import Home from './components/Home';
import Services from './components/Services';
import Photos from './components/Photos';
import Informations from './components/Informations';
import Footer from './components/Footer';
import Static from './components/Static';

export class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Home />
        <Services />
        <Photos />
        <Informations />
        <Footer />
        <Static />
      </Fragment>
    );
  }
}

export default App;
