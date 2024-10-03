import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
let [counter,setCounter] = useState(15)

 const addValue= ()=>{
  
  setCounter(counter+1)
 }

 const removeValue= ()=>{
  
  setCounter(counter-1)
 }

  return (
    <>
      <h1>Counter={counter}</h1>
      <button onClick={addValue}> Add:{counter}</button>
      <br/>
      <button onClick={removeValue}>Remove:{counter}</button>
      <br/>
      <button>footer:{counter}</button>
    </>
  )
}

export default App
