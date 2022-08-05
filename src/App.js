import React, { useState } from 'react';
import './App.css';
import FlightForm from './components/FlightForm';
import FlightList from './components/FlightList';
import MySelect from './components/UI/select/MySelect';

function App() {

  const [trucks, setTrucks] = useState([
    { driver: "Bear", weight: 2900 },
    { driver: "Wolf", weight: 2700 },
    { driver: "Bear", weight: 2800 },
  ]);

  const [selectedSort, setSelectedSort] = useState('');

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

            
            const [groupTrucks, setGroupTrucks] = useState(groupSummary);

            // console.log(groupSummary)
            console.log([...groupTrucks])

            const sortFlights = (sort) => {              
              setSelectedSort(sort);
              setTrucks([...trucks].sort((a, b) => a[sort] - b[sort]));
            }

  return (
    <div className="App">
      <FlightForm create={createFlight} />

      <div>
          <MySelect 
            value={selectedSort}
            onChange={sortFlights}
            defaultValue="Сортировка"
            options={[
              {value: 'driver', name: 'По имени'},
              {value: 'weight', name: 'По весу'}, 
            ]}/>
      </div>

      <FlightList group={groupSummary} total={totalSummary} />
    </div>
  );
}

export default App;
