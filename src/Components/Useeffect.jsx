import React, { useEffect, useState } from 'react'

export const Useeffect = () => {
    const [count,setCount] = useState(0);
    const [anothercount,setAnotherCount] = useState(50);

    useEffect (() => {
        console.log("Base case")
    },[count/*,anothercount */]) 
    /*case1 : when the dependency array is empty the code will run one time only --Base case*/
    /*case2 : Rerndering*/
    useEffect (() => {
        console.log("second case")
    },[anothercount]) 
  return (
    <div>
        <h1>Component UseEffect</h1>
        <h4>{count}</h4>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <h4>{anothercount}</h4>
        <button onClick={()=>setAnotherCount(anothercount+1)}>Increment</button>
        
    </div>
  )
}
