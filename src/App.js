import "./App.css"
import React from "react"
import { useCallback, useState } from "react"
import DurationExercise from "./components/DurationExercise"
import RepetitionExercise from "./components/RepetitionExercise"
import DistanceExercise from "./components/DistanceExercise"

const MENU_SCREEN = "menu"
const EXERCISE_SCREEN = "exercise"
const DURATION_EXERCISE = "duration"
const REPETITION_EXERCISE = "repetition"
const DISTANCE_EXERCISE = "distance"

let exerciseList = [
  {type: REPETITION_EXERCISE, name: "Push Ups"},
  {type: DURATION_EXERCISE, name: "Running"},
  {type: REPETITION_EXERCISE, name: "Planks"},
  {type: DISTANCE_EXERCISE, name: "Distance Calculator"}
]

function App() {
  let [currentScreen, setCurrentScreen] = useState(MENU_SCREEN)
  let [currentExercise, setCurrentExercise] = useState({})
  let screenComponent = undefined
  let buttonClick = useCallback((exercise) => {
    setCurrentExercise(exercise)
    setCurrentScreen(EXERCISE_SCREEN)
  })
  if(currentScreen === MENU_SCREEN) {
    screenComponent = <div>
      <p class="heading">Select an Exercise</p>
    <ul class="body">
      {exerciseList.map((exercise) => {
      return <li><div class="home-button">
        <p>{exercise.name}</p>
        <button class="button-select" onClick={() => buttonClick(exercise)}>Select</button>
      </div></li>
      })}
    </ul>
      </div>
  } else if (currentScreen === EXERCISE_SCREEN) {
  switch(currentExercise.type) {
    case DURATION_EXERCISE:
      screenComponent = <DurationExercise 
      setMenuScreen={() => setCurrentScreen(MENU_SCREEN)} 
      exercise={currentExercise.name}/>
      break
    case REPETITION_EXERCISE:
      screenComponent = <RepetitionExercise 
      setMenuScreen={() => setCurrentScreen(MENU_SCREEN)} 
      exercise={currentExercise.name}/>
      break
    case DISTANCE_EXERCISE:
      screenComponent = <DistanceExercise 
      setMenuScreen={() => setCurrentScreen(MENU_SCREEN)} 
      exercise={currentExercise.name}/>
      break
    default:
      screenComponent = undefined
  } 
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>{screenComponent}</p>
      </header>
    </div>
  )
}

export default App