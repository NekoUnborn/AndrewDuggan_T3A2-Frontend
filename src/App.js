import React, { Children, useContext, useEffect, useReducer } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import stateReducer, { stateContext } from "./stateReducer";
import AddMedication from './components/Medication/AddMedication';
import styled from 'styled-components'
import Medication from './components/Medication/Medication';
import Login from "./components/Login"
import NotFound from "./components/NotFound";
import Nav from "./components/Nav";
import Admin from "./components/Admin";
import Child from "./components/Child";
import Home from "./components/Home";
import Signup from "./components/Signup"
import ShowChild from "./components/ShowChild";
const LogoHeading = styled.h1`
    text-align: center;
    color: blue;
`
function App() {
  const [store, dispatch] = useReducer(stateReducer, {
    categories: [],
    entries: [],
    token: localStorage.getItem("token"),
    medicine: [],
    filteredMedicine: [],
    children: [],
    message: null
  });


  useEffect(() => {
    async function setMedicines() {
      if (!store.token) return;
      const res = await fetch(
        `http://127.0.0.1:4000/api/v1/medicines`,
        {
          headers: {
            Authorization: `Bearer ${store.token}`,
          },
        }
      );
      const data = await res.json();
      if (res.status === 200) {
        dispatch({
          type: 'setMedicineList',
          data: data
      })
      } else {
        localStorage.setItem("token", null);
        dispatch({
          type: "setToken",
          data: { token: null },
        });
      }
    }
    async function setChildren(){
      if (!store.token) return ;
      const res = await fetch('http://127.0.0.1:4000/api/v1/children', {
        headers: {
          Authorization: `Bearer ${store.token}`
        }
      });
      const data = await res.json()
      if(res.status === 200) {
        dispatch({
          type: 'setChildren',
          data: data
        })
      }

    }
    setMedicines();
    setChildren();
  }, [store.token]);

  return (
    <stateContext.Provider value={{ ...store, dispatch }}>
      {store.token ? (
        <>
          <LogoHeading>
            MediTrack
          </LogoHeading>
          <BrowserRouter>
            {store.token.username === "admin" ? <Nav /> : <Admin />}
            <Switch>
              <Route exact path="/" >
                <Home></Home>
                <Child></Child>
                </Route>
              <Route exact path="/Signup" component={Signup} />
              <Route exact path="/medicine">
                <Medication/>
              </Route>
              <Route exact path='/medicine/add' >
                  <AddMedication/>
              </Route>
              <Route exact path='/child/:id' component={ShowChild}/>
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
