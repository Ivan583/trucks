import React, { useEffect, useState } from "react";
import FlightList from "./components/FlightList";
import FlightForm from "./components/FlightForm";
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/modal/MyModal";
import MyInput from "./components/UI/input/MyInput";
import { useSortedFlights, useTotalSummary } 
from "./utils/useFlights";

function App() {
const [flights, setFlights] = useState([]);
const [modal, setModal] = useState(false);
const [searchQuery, setSearchQuery] = useState('');

const createFlight = newFlight => {
  setFlights([...flights, newFlight]);
  setModal(false);
}

useEffect(() => {
  const list = localStorage.getItem('flights') || [];
  setFlights(JSON.parse(list));
}, []);

useEffect(() => {
  localStorage.setItem('flights', JSON.stringify(flights));
}, [flights]);

const cleaner = () => {  
  localStorage.clear();
  setFlights([]);
};

const sortedAndFilteredFlights = 
useSortedFlights(flights, 'weight', searchQuery);

const totalSummary = useTotalSummary(sortedAndFilteredFlights);

  return (
    <div className="App">
      <div className={'btns'}>
        <MyButton onClick={cleaner}>
          Clear Storage
        </MyButton>

        <MyButton onClick={() => setModal(true)} >
          Add new flight
        </MyButton>
      </div>

      <MyInput 
       value={searchQuery} 
       onChange={e => setSearchQuery(e.target.value)} 
       placeholder="...search" />

      <MyModal visible={modal} setVisible={setModal} >
        <FlightForm create={createFlight} />
      </MyModal>    

      <FlightList
       flights={sortedAndFilteredFlights} 
       total={totalSummary} />
    </div>
  );
}

export default App;
