  
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar"
import './style.css';


function App() {
  return (
    <Router>
     
    <div className="container">
    <Navbar />
      <header className="App-header">
        <div id="bannerWrapper">
        <p className="bannerText">Welcome to Cincinnati</p>
        <img src={require('./banner.jpg')} alt=""/>
        </div>
      
      </header>
    </div>

    </Router>
  );
}

export default App