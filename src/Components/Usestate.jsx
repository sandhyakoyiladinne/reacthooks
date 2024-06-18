import React, { useState } from 'react'

export const Usestate = () => {
    const [count,setCount]=useState(0)
    function incrementcount(){
        setCount (prevCount => prevCount+1)
    }
    function decrementcount(){
        setCount (prevCount => prevCount-1)
    }
  return (
    <div>
        <button onClick={incrementcount}>Inc</button>
        <span>{count}</span>
        <button onClick={decrementcount}>Dec</button>
    </div>
  )
}
