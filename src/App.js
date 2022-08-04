import React, { useState } from 'react';
import './App.css';
import FlightList from './components/FlightList';


function App() {

  const [trucks, setTrucks] = useState([
    { driver: "Bear", weight: 2900 },
    { driver: "Wolf", weight: 2700 },
    { driver: "Bear", weight: 2800 },
  ]);

  return (
    <div className="App">
      <FlightList />
    </div>
  );
}

export default App;
