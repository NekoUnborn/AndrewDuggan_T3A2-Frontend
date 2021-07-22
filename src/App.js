import React, {useReducer, useEffect} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AddMedication from './components/Medication/AddMedication';
import Medication from './components/Medication/Medication';
import styled from 'styled-components'
import medicineReducer from './components/Medication/medicineStateReducer';
const LogoHeading = styled.h1`
    text-align: center;
    color: blue;
`
function App() {
  // const [list, setList] = useState([])
  const initialMedicineState = {
    medicine: []
  }

  const [store, dispatch] = useReducer(medicineReducer, initialMedicineState)
  const {medicine} = store
  
  async function fetchMedicine(){ // Fetches List and converts data to json, and pushes the pulled data to the state List
    const res = await fetch('http://127.0.0.1:4000/api/v1/medicines')
    const data = await res.json()
    const list = []
    for(let item of data){
      list.push(item)
    }
    dispatch({
        type: 'updateMedicineList',
        data: list
    })
  }
  useEffect(()=> {
      fetchMedicine()
  }, [])

 function updateMedicine(newMedicine){
    dispatch({
      type: 'addMedicineList',
      data: newMedicine
    })
  }
  return (
    <>
     <LogoHeading>MediTrack</LogoHeading>
    <BrowserRouter>
      <Route exact path='/medicine'>
        <Medication medicine={medicine}/>
      </Route>
      <Route exact path='/medicine/add'>
        <AddMedication updateMedicine={updateMedicine}></AddMedication>
      </Route>

    </BrowserRouter>
   </>
  );
}

export default App;
