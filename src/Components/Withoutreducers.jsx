import React, { useState } from 'react'

export const Withoutreducers = () => {
    const [count, setCount] = useState(0);
    const [inputvalue, setinputvalue] = useState(0);
    
    const increasevalue = () => {
        setCount(count + 1)
    }
    const decreasevalue = () => {
        setCount(count - 1)
    }
    const handleinputchange = (event) => {
        setinputvalue(Number(event.target.value))
    }
    const addtocount = () => {
        setCount(count + inputvalue) 
    }
  return (
    <div>
        <h1>WithoutReducer</h1>
        <h1>Count :: {count}</h1>
        <button onClick={increasevalue}>Increment</button>
        <button onClick={decreasevalue}>Decrement</button>
        <div>
            <input type="number" value={inputvalue} onChange={handleinputchange}/>
            <button onClick={addtocount}>Add count</button>
        </div>
    </div>
  )
}

