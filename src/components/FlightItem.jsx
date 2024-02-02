import React from "react";
import PropTypes from "prop-types";

export default function FlightItem(props) {
    return (
        <div className="flight">
            <div>driver: {props.flight.driver}</div>
            <div>weight: {props.flight.weight}</div>
        </div>
    );

    FlightItem.propTypes = {
        flight: PropTypes.object.isRequired
    }
}
