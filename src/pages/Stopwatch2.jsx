import React, { useState,useRef } from 'react'

function Stopwatch2() {
     const [hh, setHh] = useState(0);
     const [mm, setMm] = useState(0);
     const [ss, setSs] = useState(0);
     const [ms, setMs] = useState(0); 
     const milliseconds  = useRef(0) ; 
     const inetrvalid = useRef(null) ; 
     const start = () => { 
          console.log("outside function",milliseconds.current) ; 
          if( inetrvalid.current){ 
               clearInterval( inetrvalid.current) ;
          }
           inetrvalid.current = setInterval(() => { 
               milliseconds.current+=10 ;  
               let milisecond = Math.trunc(milliseconds.current%1000) ; 
               let seconds = Math.trunc( milliseconds.current  / 1000) % 60;
               let minutes = Math.trunc((milliseconds.current  / (1000 * 60)) % 60);
               let hours = Math.trunc((  milliseconds.current    / (1000 * 60 * 60)) % 24);
               setHh(hours);
               setMm(minutes);
               setSs(seconds);
               setMs(milisecond); 
               console.log(milliseconds.current);
          },10); 

     }
     const reset = () => {
        
          milliseconds.current = 0 ;   
          if( inetrvalid.current){ 
               clearInterval( inetrvalid.current) ; 
               inetrvalid.current = null ;
          } 
          setHh(0);
          setMm(0);
          setSs(0);
          setMs(0); 

     }
     return (
          <div style={{display:'flex',gap:'4px',flexDirection:'column'}}>
               <div>  
                  <span> Stopwatch </span> 
                  <div><h1>{hh} : {mm} : {ss} : {ms}</h1>  </div>
               </div>
               <div style={{display:'flex',gap:'4px'}}>
                    <button onClick={start}>Start</button>
                    <button onClick={reset}>Reset</button>
               </div>
          </div>
     )
}

export default Stopwatch2