import React, { useState } from 'react';
import './App.css';
import FlightList from './components/FlightList';


function App() {

  const [trucks, setTrucks] = useState([
    { driver: "Bear", weight: 2900 },
    { driver: "Wolf", weight: 2700 },
    { driver: "Bear", weight: 2800 },
  ]);

  function countSummary(arr) {
    const drivers = [...arr].map(el => el.driver);

    // список водителей

    const uniqueDrivers = [...new Set(drivers)];

    // определение промежуточных итогов

    const summary = uniqueDrivers.map(elem => {
      let summ = arr.filter(truck => truck.driver === elem)
      .map(truck => truck.weight)
      .reduce((acc, curr) => acc + curr);
      return { driver: elem, weight: summ};
    })
      return summary;
  }

  let groupSummary = countSummary(trucks);

  const totalSummary = groupSummary
    .map(el => el.weight)
    .reduce((acc, curr) => acc + curr);

  return (
    <div className="App">
      <FlightList group={groupSummary} total={totalSummary} />
    </div>
  );
}

export default App;
