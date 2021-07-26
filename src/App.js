import React, { useContext, useEffect, useReducer } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import stateReducer, { stateContext } from "./stateReducer";
import Login from "./components/Login"
import NotFound from "./components/NotFound";
import Medication from "./components/Medication";
import Nav from "./components/Nav";
import Admin from "./components/Admin";
import Home from "./components/Home";
import Signup from "./components/Signup"

function App() {
  const [store, dispatch] = useReducer(stateReducer, {
    categories: [],
    entries: [],
    token: localStorage.getItem("token"),
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
          <h1>Journal</h1>
          <BrowserRouter>
            {store.token.username === "admin" ? <Nav /> : <Admin />}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Signup" component={Signup} />
              <Route exact path="/medicine" component={Medication} />
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
