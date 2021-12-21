import React, {useState} from 'react';
import './App.css'

function App() {

  // variable to store value in state
  const [ab, setAb] = useState(0);
  const [cd, setCd] = useState(ab);

  return (
    <div className="main">
      <form>
        <label>
        
          <input type="number" name="number" onChange={e => setAb(Number(e.target.value))} />
        </label>
        <button onClick={(event) => (setCd(ab + 20), event.preventDefault())}>Add</button>  
        <button onClick={(event) => (setCd(20- ab), event.preventDefault())}>Substract</button> 
      </form>
      <p>The final output is {cd}</p>
    </div>
  );
}

export default App;
