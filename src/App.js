import React, { Component } from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

const imeFirme = "Mikroelektronika inc."
const slogan = "Pravimo kvalitetne mikrokntrolere"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header ime={imeFirme} slogan={slogan}/>
        <Main/>
        <Footer ime={imeFirme} osnovano = {2019}/>
      </div>
    );
  }
}

export default App;
