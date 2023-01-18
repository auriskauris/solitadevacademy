import './App.css';
import React, { useState, useEffect } from 'react';
import { JourneyList } from './components/journeys/JourneyList';
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
        </ul>
       </nav>
      
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/journeys" element={<JourneyList/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
