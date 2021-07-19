import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Medication from './components/Medication/Medication';
function App() {
  return (
    <>
    <BrowserRouter>
      <Route exact path='/medication'>
        <Medication/>
      </Route>

    </BrowserRouter>
   </>
  );
}

export default App;
