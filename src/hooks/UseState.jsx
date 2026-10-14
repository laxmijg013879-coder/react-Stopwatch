import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);

  const incre =() => {
    setCount(count + 1);
  }

  const decre =() => {
    setCount(count - 1);
  }

  const reset =() => {
    setCount(0);
  }
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button className="btn btn-warning" onClick={incre}>Increment</button>
      <button className="btn btn-danger" onClick={decre}>Decrement</button>
      <button className="btn btn-secondary" onClick={reset}>Reset</button>
    </div>
  )
}

export default UseState