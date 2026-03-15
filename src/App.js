import React, {Component} from 'react';
import { BrowserRouter as Router} from "react-router-dom"
import './App.css';

import NavBar from './components/organisms/NavBar';
import Footer from './components/organisms/Footer';
import Routes from './Routers';
import Home from './pages/Home';
import ConfeccaoBrasil from './pages/ConfeccaoBrasil';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <Router>

      <div className="App">
        <NavBar />

        <Routes />

        <Footer />
      </div>

    </Router>
  )
}

export default App;
