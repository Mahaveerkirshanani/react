import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  let [color, setColor] = useState("#f43aac");


  return (
    <>
      <div style={{ backgroundColor:color }} className="container ">
        <div className="button">
          <button className="btn" onClick={()=> setColor('Red')}>Red</button>
          <button className="btn" onClick={()=> setColor('Green')}>Green</button>
          <button className="btn" onClick={()=> setColor('Blue')}>Blue</button>
          <button className="btn" onClick={()=> setColor('Black')}>Black</button>
          <button className="btn" onClick={()=> setColor('Orange')}>Orange</button>
          <button className="btn" onClick={()=> setColor('Yellow')}>Yellow</button>
          <button className="btn" onClick={()=> setColor('Violet')}>Violet </button>
          <button className="btn" onClick={()=> setColor('Pink')}>pink</button>
        </div>
      </div>
    </>
  );
}

export default App;
