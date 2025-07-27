import React, { useState } from 'react'
import MyButton from './MyButton'

function Counter() { 
  const [count,setCount] = useState(0) ; 
  function handleclick(params) {
          setCount(count + 1); 
          console.log("update count  of " , count) ;
          localStorage.setItem("count", count+1);
     }
  return (
    <div>
      {/* <MyButton id={"one"} count ={count} handleclick={handleclick}/> 
      <MyButton id={"two"} count ={count} handleclick={handleclick}/> */}
      <MyButton id={"two"}/>
    </div>
  )
}

export default Counter