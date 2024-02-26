import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <div className='app'> 
    <Router>
      <Header />
      <div className='container'>
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route path='*' Component={PageNotFound}/>
      </Routes>
      </div>
      <Footer />
    </Router>
    </div>
  )
}

export default App;
