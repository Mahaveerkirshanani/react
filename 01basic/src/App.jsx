import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let  [count, setCount] = useState(0)


  const addValue=()=>{
    console.log("value add");
    setCount(count = count +1)
  }
 
   const removeValue=()=>{
   setCount(count = count -1)
  }


  return (
    <>
     <h3>chai aur code {count} </h3>
     <button onClick={addValue}>add value </button>
     <br />
     <br />
     <button onClick={removeValue}>remove value </button>
    </>
  )
}

export default App
