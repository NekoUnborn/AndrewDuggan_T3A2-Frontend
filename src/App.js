import React, { useContext, useEffect, useReducer } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import stateReducer, { stateContext } from "./stateReducer";
import AddMedication from './components/Medication/AddMedication';
import styled from 'styled-components'
import Medication from './components/Medication/Medication';
import Login from "./components/Login"
import NotFound from "./components/NotFound";
import Nav from "./components/Nav";
import Admin from "./components/Admin";
import Home from "./components/Home";
import Signup from "./components/Signup"
import medicineReducer from './components/Medication/medicineStateReducer';
const LogoHeading = styled.h1`
    text-align: center;
    color: blue;
`
function App() {
  const [store, dispatch] = useReducer(stateReducer, {
    categories: [],
    entries: [],
    token: localStorage.getItem("token"),
    medicine: []
  });
  const {medicine} = store
  // const [list, setList] = useState([])
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
      type: 'addMedicine',
      data: newMedicine
    })
  }
  useEffect(() => {
    async function setMedicines() {
      if (!store.token) return;
      const res = await fetch(
        `${process.env.REACT_APP_API_ENDPOINT}medicines`,
        {
          headers: {
            Authorization: `Bearer ${store.token}`,
          },
        }
      );
      const data = await res.json();
      if (res.status === 200) {
        dispatch({
          type: "setMedicine",
          categories: data,
        });
      } else {
        localStorage.setItem("token", null);
        dispatch({
          type: "setToken",
          data: { token: null },
        });
      }
    }
    setMedicines();
  }, [store.token]);

  return (
    <stateContext.Provider value={{ ...store, dispatch }}>
      {store.token ? (
        <>
          <h1>
            MediTrack
          </h1>
          <BrowserRouter>
            {store.token.username === "admin" ? <Nav /> : <Admin />}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Signup" component={Signup} />
              <Route exact path="/medicine">
                <Medication medicine={medicine}/>
                </Route>
                <Route>
                  <AddMedication path='/medicine/add' updateMedicine={updateMedicine}/>
                </Route>
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        </>
      ) : (
        <Login />
      )}
    </stateContext.Provider>
  );
}

export default App;
