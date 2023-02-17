import { useState } from 'react';
import './App.css';

function App() {
        // const arr = useState();
        // const value = arr[0];
        // const setValue = arr[1];
  const [value, setValue] = useState('');
  
  return (
    <div className="App">
      <p>Hello Armenia</p>

      <button onClick={(evt) => {
        console.log('onClick');
      }}>Click Me</button>

      <input type='type' onChange={(evt) => {
        console.log(evt.target.value);
      }}></input>

      <p>{value}</p>

      <input type='text' onChange={(evt) => {
        setValue(evt.target.value);
      }}></input>
    </div>
  );
}

export default App;
