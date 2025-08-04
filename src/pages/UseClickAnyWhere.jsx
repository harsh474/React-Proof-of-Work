import React from 'react' ; 
import {useState} from 'react' ;
import useClickAnywhere from '../components/UseClickAnyWhere';
function UseClickAnyWhere() {
      const [count, setCount] = useState(0);
      useClickAnywhere(() => {
    setCount((prev) => prev + 1);
  });
  return ( 
     <>   
     <h1>functionlity to cunt the number of click on page </h1>
        <p>Click count: {count}</p> 

     </>
   
  )
}

export default UseClickAnyWhere