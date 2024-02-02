import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

export default function FlightForm({create}) {
    const [flight, setFlight] = useState({driver: '', weight: 0});

    const block = !!flight.driver.trim() && !!flight.weight

    const addNewFlight = e => {
        e.preventDefault();
        const newFlight = {...flight, id: Date.now()};
        create(newFlight);
        setFlight({driver: '', weight: 0});
    }

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
            type="number" 
            placeholder="weight" />

            <MyButton 
            disabled={!block} 
            onClick={addNewFlight}>Add flight</MyButton>
        </form>
    );
}
