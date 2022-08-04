import React from "react";
import FlightItem from './FlightItem';

const FlightList = ({group, total}) => {

    if (!group.length) {
        return <h2>Empty</h2>
     }

    return (
        <div>
            <h2>Total weight: {total}</h2>
            {group.map(flight => 
                <FlightItem
                 flight={flight}
                 key={flight.driver}/>)}
        </div>
    );
};

export default FlightList;
