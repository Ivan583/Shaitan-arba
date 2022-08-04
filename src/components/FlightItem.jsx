import React from 'react';

const FlightItem = ({flight}) => {


    return (
        <div className='weighting'>

        <div className='column'>
           <span> {flight.driver} </span> 
        </div>

        <div className='column'>
           <span> {flight.weight } </span> 
        </div>

      </div>
    );
};

export default FlightItem;
