import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainRoute from './Components/MainRoute';
import SpeechToText from './Components/SpeechToText';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      {/* <SpeechToText/> */}
      <MainRoute/>
      <Navbar/>
    </div>
  );
}

export default App;
