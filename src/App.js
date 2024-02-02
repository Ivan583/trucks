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

const [driver, setDriver] = useState('')
const [weight, setWeight] = useState(0)

const block = !!driver.trim() && !!weight

const addNewFlight = e => {
  e.preventDefault();
  const newFlight = {
    id: Date.now(),
    driver,
    weight
  };
  setFlights([...flights, newFlight]);
  setDriver('');
  setWeight(0);
}

  return (
    <div className="App">
      <form>
        <MyInput 
        value={driver}
        onChange={e => setDriver(e.target.value)}
        type="text" 
        placeholder="driver" />

        <MyInput 
        value={weight} 
        onChange={e => setWeight(parseInt(e.target.value))} 
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
