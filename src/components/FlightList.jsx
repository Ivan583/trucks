import React from "react";
import FlightItem from "./FlightItem";

export default function FlightList ({flights}) {

    return (
        <div>
        <h1>Total weight: </h1>
        {flights.map(flight => 
            <FlightItem flight={flight} key={flight.id} />
            )}
        </div>
        );
}
