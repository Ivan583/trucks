import React, { useState } from "react";
import FlightList from "./components/FlightList";
import FlightForm from "./components/FlightForm";

function App() {
const [flights, setFlights] = useState([
  {id: 1, driver: 'Chuck Norris', weight: 5700},
  {id: 2, driver: 'Steven Seagel', weight: 5400},
  {id: 1, driver: 'Bolo Yeung', weight: 5900},
])

const createFlight = newFlight =>
setFlights([...flights, newFlight]);

  return (
    <div className="App">
      <FlightForm create={createFlight} />

      <FlightList flights={flights} />
    </div>
  );
}

export default App;
