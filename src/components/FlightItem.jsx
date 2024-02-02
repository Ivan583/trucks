import React from "react";

export default function FlightItem(props) {
    return (
        <div className="flight">
            <div>driver: {props.flight.driver}</div>
            <div>weight: {props.flight.weight}</div>
        </div>
    );
}
