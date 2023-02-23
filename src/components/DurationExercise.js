import Stopwatch from "./Stopwatch"
import '../App.css'

export default function DurationExercise({exercise, setMenuScreen}) {
  return <div>
    <h1>{exercise}</h1>
    <div class="image"></div>
    <br></br>
    <div class="dur-container">
      <h3 class="title">Duration</h3>
      <Stopwatch/>
    </div>
   
    <button onClick={setMenuScreen}>Menu</button>
    </div>
}