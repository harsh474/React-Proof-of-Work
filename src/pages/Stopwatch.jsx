import React, { useRef, useState } from 'react'

function Stopwatch() { 
     const [timer,setTimer] = useState(0) ;  
     const interval = useRef(null); 
     function starthandler(){ 
         if(interval.current!=null) return  ; 
         interval.current = setInterval(() => {
          setTimer(prevTime => prevTime + 1);
         }, 1000);
     } 
     function stophandler(params) {
          clearInterval(interval.current);  
          interval.current = null ; 
     }
  return (
    <div> 
           <h1>Stopwatch</h1>   6
           <h3>{timer}</h3>  
           <div className='flex gap-3 '>
           <button onClick={starthandler}>Start</button> 
           <button onClick={stophandler}>Stop</button> 
           </div>
         
    </div>
  )
}

export default Stopwatch ; 