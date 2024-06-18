import React, { useReducer,useState } from 'react';

const initialstate = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
        case 'addtocount':
            return { count: state.count + action.payload};
        default:
            return state;
    }
}

export const Reducers = () => {
    const [state, dispatch] = useReducer(reducer, initialstate);
    const [inputvalue, setinputvalue] = useState(0);

    const handleinputchange = (event) => {
        setinputvalue(Number(event.target.value))
    }

    return (
        <div>
            <h1>Count: {state.count}</h1>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            <div>
                <input type="number" value={inputvalue} onChange={handleinputchange}/>
                <button  onClick={() => dispatch({ type: 'addtocount', payload:inputvalue })}>Add count</button>
            </div>
        </div>
    );
};

