import React from "react"
import { useState } from "react"
import '../App.css'

export default function DistanceExercise({exercise, setMenuScreen}) {
    const [steps, setSteps] = useState(0)
    let miles
    const onChange = e => {
    miles = e.target.value
  }
  return <div>
    <h1>{exercise}</h1>
    <div class="image"></div>
    <br></br>
    <div class="dis-container">
      <h3>Enter steps walked</h3>
      <input type="number" id="input" onChange={onChange}></input>
    <button onClick={() => setSteps(miles)}>Calculate</button>
    <p>{steps} steps walked</p>
    <p>{steps/2000} miles walked</p>
    </div>
    
    <button onClick={setMenuScreen}>Menu</button>
    </div>
}