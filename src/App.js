import React, { useState } from 'react';
import './App.css';
import FlightForm from './components/FlightForm';
import FlightList from './components/FlightList';

function App() {

  const [trucks, setTrucks] = useState([
    { driver: "Bear", weight: 2900 },
    { driver: "Wolf", weight: 2700 },
    { driver: "Bear", weight: 2800 },
  ]);

  const createFlight = newFlight => 
    setTrucks([...trucks, newFlight]);

    const groupSummary = trucks.length !== 0 ? countSummary(trucks) : [] ;

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
      });
        return summary;
    }; 
  
      const totalSummary = groupSummary.length === 0 ?
        groupSummary.length :
          groupSummary
            .map(el => el.weight)
            .reduce((acc, curr) => acc + curr);

  return (
    <div className="App">
      <FlightForm create={createFlight} />

      <div>
        <select>
          <option value="value">По имени</option>
          <option value="value">По весу</option>
        </select>
      </div>

      <FlightList group={groupSummary} total={totalSummary} />
    </div>
  );
}

export default App;
