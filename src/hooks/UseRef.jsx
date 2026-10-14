import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
    const [count, setcount] = useState(0)
    let a = useRef(0);
    let btnRef = useRef();

    const incre = () => {
        setcount(count + 1)
    }
    const decre = () => {
        setcount(count - 1)
    }

    useEffect(() => {
        a.current += 1
        console.log(`The value of a id ${a.current}`);
        btnRef.current.style.backgroundColor = "red"
    }, [count])
  return (
    <div>
      <h1>count : {count}</h1>
      <button className='btn btn-warning' ref={btnRef} onClick={incre}>Increment</button>
      <button className='btn btn-danger' onClick={decre}>Decrement</button>
    </div>
  )
}

export default UseRef
