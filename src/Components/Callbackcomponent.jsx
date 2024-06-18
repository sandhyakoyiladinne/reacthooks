import React, {useCallback, useState} from 'react'


const ChildComponent = React.memo(({ onClick }) => {
    console.log('Child component re-rendered');
    return (
      <button onClick={onClick}>Click me</button>
    );
  });

export const Callbackcomponent = () => {
const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  const handleClick = useCallback(() => {
    setCount(prevCount => prevCount + increment);
  }, [increment]);

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
      <input
        type="number"
        value={increment}
        onChange={(e) => setIncrement(Number(e.target.value))}
        placeholder="Increment value"
      />
    </div>
  )
}
