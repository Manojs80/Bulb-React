
import './App.css';
import React, { useState } from "react";



function App() {

function Bulbs() {
  const [on, setOn] = useState(false);

  const lightOn = () => setOn(true);
  const lightOff = () => setOn(false);
 
  return (
    <>
      <div className={on ? "bulb-on" : "bulb-off"} />
       <div className='switch'>
      <button  onClick={lightOn}>ON</button>
      <button onClick={lightOff}>OFF</button>
      </div>
    </>
  );
}

 
  return (
    <div className="App">
    <Bulbs />
  </div>
  );
}

export default App;


/* 

 <div>
        {
          on? (<div><p>Welcome back, good to see you in here</p></div> ) : (<div><p>second</p></div> )
        }
      </div>
  
 
 
 

*/