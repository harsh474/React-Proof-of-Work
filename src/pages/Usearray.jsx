import React from 'react'
import useArray from '../utility/useArray'
function Usearray() { 
const defaultValue = ['apple', 'banana'];
const { array, push, update, remove, filter, set, clear } = useArray(defaultValue); 

  return (
      <div>  
      <div style={{display:'flex',justifyContent:'center',fontSize:'62px',paddingBottom:'23px',color:'royalblue'}}>  
        <h2 style={{}}>Custom Usearray Hook</h2>
      </div>
    
      <p>Fruits: {array.join(', ')}</p>
      <button onClick={() => push('orange')}>Add orange</button>
       <br/>
      <button onClick={() => update(1, 'grape')}>
        Change second item to grape
      </button>  
      <br/>
      <button onClick={() => remove(0)}>Remove first</button>
      <br/>
      <button onClick={() => filter((fruit) => fruit.includes('b'))}>
        Keep fruits containing 'b'
      </button>
      <br/>
      <button onClick={() => set(defaultValue)}>Reset</button>
      <br/>
      <button onClick={clear}>Clear list</button>
    </div>
  )
}

export default Usearray ; 
