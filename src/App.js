import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AddMedication from './components/Medication/AddMedication';
import Medication from './components/Medication/Medication';
import styled from 'styled-components'
const LogoHeading = styled.h1`
    text-align: center;
    color: blue;
`
function App() {
  return (
    <>
     <LogoHeading>MediTrack</LogoHeading>
    <BrowserRouter>
      <Route exact path='/medicine'>
        <Medication/>
      </Route>
      <Route exact path='/medicine/add'>
        <AddMedication></AddMedication>
      </Route>

    </BrowserRouter>
   </>
  );
}

export default App;
