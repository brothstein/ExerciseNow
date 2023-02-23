import { useState } from "react";
import '../App.css'

export default function RepetitionExercise({exercise, setMenuScreen}) {
  let [count, setCount] = useState(0)
  return <div >
    <h1>{exercise}</h1>
    <div class="image"></div>
    <br></br>

    <div class="rep-container">
      <h3 class="title">Repetition</h3>
      <div class="col1">
        <p>Rep Count</p>
        <p>{count}</p>
      </div>
      <div class="col2">
        <button onClick={() => setCount(count => count + 1)}>Add</button>
        <br></br>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
    
     <button onClick={setMenuScreen}>Menu</button>
    </div>
}