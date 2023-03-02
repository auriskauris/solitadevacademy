import './App.css';
import React, { useState, useEffect } from 'react';
import { JourneyList } from './components/journeys/JourneyList';
import { StationList } from './components/stations/StationList';
import Frontpage from './components/Frontpage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Link to='/'>Frontpage</Link>
        </header>
       <nav>
        <ul>
          <li>
            <Link to='/journeys'>See journeys</Link>
          </li>
          <li>
            <Link to='/stations'>See stations</Link>
          </li>
        </ul>
       </nav>
      
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/journeys" element={<JourneyList/>} />
        <Route path="/stations" element={<StationList/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
