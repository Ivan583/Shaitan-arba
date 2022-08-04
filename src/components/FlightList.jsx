import React from "react";
import FlightItem from './FlightItem';

const FlightList = ({group, total}) => {

    return (
        <div>
            <h2>Total weight: {total}</h2>
            <FlightItem />
        </div>
    );
};

export default FlightList;
