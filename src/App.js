import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  NaviBar  from './components/Navibar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { HomePage } from './pages/HomePage';
import {JourneysPage} from './pages/JourneysPage';
import { StationsPage } from './pages/StationsPage';
import { StationItemPage } from './pages/StationItemPage';

function App() {
  return (
    <>
      <Router>
        <NaviBar />
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/journeys" element={<JourneysPage/>} />
          <Route path="/stations" element={<StationsPage/>} />
          <Route path="/stations/:stationName" element={<StationItemPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
