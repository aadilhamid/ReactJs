import './App.css'
import React, { useState } from 'react'
import Card from './components/cards'

function App() {
  const [counter,setCounter]=useState(15)
  const addValue=()=>{
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
  
  }

  return (
    <>
      
      <h1>welcome to Fibar Algorithm</h1>
      <button onClick={addValue}>{counter}</button>
      <br/>
      <button>Remove Value</button>
    </>
  )
}

export default App
