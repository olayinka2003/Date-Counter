import React from "react";
import { useState } from "react";

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const handleReset = ()=>{
    setCount("")
    setStep(1)
    
  }


  // const incrementStep = () => {
  //   setStep((s) => s + 1);
  // };
  // const decrementStep = () => {
  //  if(step>= 1) setStep((s) => s - 1);
  // };
  const incrementCount = () => {
    setCount((c) => c + step);
  };
  const decrementCount = () => {
    setCount((c) => c - step);
  };
  const addDaysToDate = (date, days) => {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result.toDateString();
  };

  const currentDate = new Date();
  const futureDate = addDaysToDate(currentDate, count);

  return (
    <>
      <div className="step">
      
        <h1>step:{step}</h1>
        <input type="range" min="0" max="10"  value={step} onChange={(e)=>setStep(Number(e.target.value))}/>
  
      </div>
      <div className="count"> 
        <button onClick={decrementCount}>-</button>
        <input type="text" value={count}  onChange={(e)=>setCount(Number(e.target.value))}/>
        <button onClick={incrementCount}>+</button>
      </div>
      <h2>
        {count >= 1 && `${count} days from today is ${futureDate}`}

        {count === 0 && `Today is ${futureDate}`}

        {count <= -1 && `${Math.abs(count)} days ago was ${futureDate}`}
      </h2>
      {count !== 0 || step !==1 ?(
       <div>
       <button onClick={handleReset} style={{padding:"10px", backgroundColor:'green', border:'none', color:'white', borderRadius:'10px'}}>Reset</button>
     </div>
      ): "" }
     
    </>
  );
}

export default Counter;
