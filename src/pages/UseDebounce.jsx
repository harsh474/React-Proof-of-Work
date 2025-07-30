import React from 'react' 
import { useState } from 'react';
import useDebounce from '../utility/useDebounce';
import { col } from 'framer-motion/client';
function UseDebounce() {
 const [keyword, setKeyword] = useState('');
  const debouncedKeyword = useDebounce(keyword, 1000);

  return (
    <div style={{color:'white'}}> 
      <div style={{display:'flex-col',justifyContent:'center',paddingBottom:'23px',color:'royalblue' }}>  
        <h1 style={{fontSize:'54px'}}>Custom useDebounce Hook</h1>  
        <br/>
        <p>It can use to prevent multiple api call,by adding delay in state update, like in search etc.</p>
      </div>
    
      <input value={keyword} style={{color:'white',border:'2px solid white'}} placeholder='Enter Keyword' onChange={(e) => setKeyword(e.target.value)} />
      <p>Debounced keyword: {debouncedKeyword}</p>
    </div>
  );
}

export default UseDebounce