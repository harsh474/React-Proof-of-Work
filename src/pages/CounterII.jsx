import React from 'react' ; 
import useCounter from '../components/UseCounter';

function CounterII() {
       const { count, increment, decrement, reset, setCount } = useCounter();

  return (
     <div className='flexcol'>
      <p>Counter: {count}</p> 
      
      <div className='flexrow'>  
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default CounterII