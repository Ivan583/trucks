import React, { useState } from "react";
import FlightList from "./components/FlightList";
import FlightForm from "./components/FlightForm";
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/modal/MyModal";

function App() {
const [flights, setFlights] = useState([
  {id: 1, driver: 'Chuck Norris', weight: 5700},
  {id: 2, driver: 'Steven Seagel', weight: 5400},
  {id: 1, driver: 'Bolo Yeung', weight: 5900},
])

const [modal, setModal] = useState(false);

const createFlight = newFlight => {
  setFlights([...flights, newFlight]);
  setModal(false);
}

  return (
    <div className="App">
      <div className={'btns'}>
        <MyButton onClick={() => setModal(true)} >
          Add new flight
        </MyButton>
      </div>

      <MyModal visible={modal} setVisible={setModal} >
        <FlightForm create={createFlight} />
      </MyModal>      

      <FlightList flights={flights} />
    </div>
  );
}

export default App;
