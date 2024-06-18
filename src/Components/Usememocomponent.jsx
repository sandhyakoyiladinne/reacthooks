import React, { useMemo }from 'react'

export const Usememocomponent = ({ a, b }) => {
    // Perform an expensive calculation
    const calculateValue = (a, b) => {
      console.log('Calculating...');
      return a + b; // Replace this with a more expensive calculation
    };
  
    const memoizedValue = useMemo(() => calculateValue(a, b), [a, b]);

  return (
    <div>
        <p>The calculated value is: {memoizedValue}</p>
    </div>
  )
}
