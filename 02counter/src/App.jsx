import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setCounter] = useState(0)

  // let counter = 15

  const addValue = () => {
    console.log("Clicked");
    // counter = counter + 1
    setCounter(counter + 1)
  }

  const refreshValue = () =>{
    setCounter(0)
  }

  const removeValue = () =>{
    if(counter === 0){
      setCounter(0)
    }else{
      setCounter(counter - 1)
    }
    
  }
  return (
    <>
     <h1>Counter</h1>
     <h2>{counter}</h2>

     <button
     onClick = {removeValue}
     >
      - </button>
      <button
     onClick={refreshValue}
     >
      ↻ </button>
     <button
     onClick={addValue}
     >
      + </button>
    </>
  )
}

export default App
