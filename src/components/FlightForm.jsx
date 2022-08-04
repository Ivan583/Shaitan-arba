import React, {useState} from "react";
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const FlightForm = () => {

    const [flight, setFlight] = useState({driver: '', weight: 0});

    const addNewFlight = e => {
      e.preventDefault();
    //   setTrucks([...trucks, {...flight}]);
      setFlight({driver: '', weight: 0});
    };

    return (
        <form>
        <MyInput 
          value={flight.driver}
          onChange={e => setFlight({...flight, driver: e.target.value})}
          type="text" 
          placeholder="driver" />

        <MyInput
          value={flight.weight}
          onChange={e => setFlight({...flight, weight: parseInt(e.target.value)})}
          type="number" />

        <MyButton onClick={addNewFlight}>Добавить рейс</MyButton>
      </form>
    );
};

export default FlightForm;
