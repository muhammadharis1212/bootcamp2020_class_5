import React, { useState } from 'react';
import './App.css';
import Parent from'./Parent.js';
import ValueContext from './ValueContext';

function App() {
  //let [number, setNumber] = useState(45);
  let value = 87;
  return (
    <ValueContext.Provider value = {value}>
    <div>
     
     <Parent></Parent>

    </div>
    </ValueContext.Provider>
  );
}

export default App;
