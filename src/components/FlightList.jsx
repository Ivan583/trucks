import React from "react";
import PropTypes from "prop-types";
import FlightItem from "./FlightItem";

export default function FlightList ({flights}) {

    return (
        <div>
        <h1>Total weight: </h1>
        {flights.map(flight => 
            <FlightItem flight={flight} key={flight.driver} />
            )}
        </div>
        );

        FlightList.propTypes = {
            flights: PropTypes.arrayOf(PropTypes.object).isRequired
        }
}
