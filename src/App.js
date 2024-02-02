import { useState } from "react";
import FlightItem from "./components/FlightItem";

function App() {
const [flights, setFlights] = useState([
  {id: 1, driver: 'Chuck Norris', weight: 5700},
  {id: 2, driver: 'Steven Seagel', weight: 5400},
  {id: 1, driver: 'Bolo Yeung', weight: 5900},
])

  return (
    <div className="App">
      <h1>React Project</h1>
        {flights.map(flight => 
          <FlightItem flight={flight} key={flight.id} />
          )}
    </div>
  );
}

export default App;
