import React, { useEffect, useReducer } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import stateReducer, { stateContext } from "./stateReducer";
import AddMedication from './components/medication/AddMedication';
import styled from 'styled-components'
import Credentials from "./components/credentials/Credentials"
import NotFound from "./components/NotFound";
import Nav from "./components/Nav";
import Admin from "./components/Admin";
import Child from "./components/Child";
import Home from "./components/Home";
import ChildForm from "./components/ChildForm";
import Rewards from "./components/rewards/Rewards";
const LogoHeading = styled.h1`
    text-align: center;
    color: blue;
`
function App() {
  const [store, dispatch] = useReducer(stateReducer, {
    categories: [],
    checkListEntries: [],
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
      const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}children`, {
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
  console.log(process.env)
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
              <Route exact path='/medicine/add' >
                  <AddMedication />
              </Route>
              <Route exact path='/child/add' component={ChildForm}/>
              {/* <Route exact path='/child/:id' component={ShowChild}/> */}
              <Route exact path='/child/:id/rewards' component={Rewards}></Route>
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        </>
      ) : (
        <>
        <LogoHeading>MediTrack</LogoHeading>
        <Credentials />
        </>
      )}
    </stateContext.Provider>
  );
}
    

export default App;
