import React, { useState } from 'react';
import './App.css';
import Parent from'./Parent.js';

function App() {
  let [number, setNumber] = useState(45);
  return (
    <div>
     
     <Parent num={number}></Parent>
     <button onClick={()=>{setNumber(++number)}}>update number</button>

    </div>
  );
}

export default App;
