import React, { useState } from 'react';
import './App.css';
import FlightList from './components/FlightList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {

  const [trucks, setTrucks] = useState([
    { driver: "Bear", weight: 2900 },
    { driver: "Wolf", weight: 2700 },
    { driver: "Bear", weight: 2800 },
  ]);

  const [driver, setDriver] = useState('');
  const [weight, setWeight] = useState(0);

  const addNewFlight = e => {
    e.preventDefault();
    const newFlight = {
      driver,
      weight: parseInt(weight)
    }
    setTrucks([...trucks, newFlight]);
  }

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
      <form>
        <MyInput 
          value={driver}
          onChange={e => setDriver(e.target.value)}
          type="text" 
          placeholder="driver" />

        <MyInput
          value={weight}
          onChange={e => setWeight(e.target.value)}
          type="number" />

        <MyButton onClick={addNewFlight}>Добавить рейс</MyButton>
      </form>

      <FlightList group={groupSummary} total={totalSummary} />
    </div>
  );
}

export default App;
