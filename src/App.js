import React, { useState } from "react";
import FlightList from "./components/FlightList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
const [flights, setFlights] = useState([
  {id: 1, driver: 'Chuck Norris', weight: 5700},
  {id: 2, driver: 'Steven Seagel', weight: 5400},
  {id: 1, driver: 'Bolo Yeung', weight: 5900},
])

const [flight, setFlight] = useState({driver: '', weight: 0});

const block = !!flight.driver.trim() && !!flight.weight

const addNewFlight = e => {
  e.preventDefault();
  setFlights([...flights, {...flight, id: Date.now()}]);
  setFlight({driver: '', weight: 0});
}

  return (
    <div className="App">
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

      <FlightList flights={flights} />
    </div>
  );
}

export default App;
