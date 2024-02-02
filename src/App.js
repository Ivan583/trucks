import { useState } from "react";
import FlightList from "./components/FlightList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
const [flights, setFlights] = useState([
  {id: 1, driver: 'Chuck Norris', weight: 5700},
  {id: 2, driver: 'Steven Seagel', weight: 5400},
  {id: 1, driver: 'Bolo Yeung', weight: 5900},
])

  return (
    <div className="App">
      <form>
        <MyInput type="text" placeholder="driver" />
        <MyInput type="number" placeholder="0" />
        <MyButton>Add flight</MyButton>
      </form>

      <FlightList flights={flights} />
    </div>
  );
}

export default App;
