import { useRef, useState } from 'react';
import '../css/otp.css' ; 
import { useEffect } from 'react';

export default function OtpInput() {  
    const [state_hover,setState_hover]= useState(1); 
     const [state,setState]  = useState({ 
          1:'', 
          2:'', 
          3:'', 
          4:''
     }) 
     const clickhandler = (e)=>{  
         let {name,value} = e.target ;  
         if(value===''){ 
           setState({...state,[name]:value});  
           return ; 
         }   
          
         if(value.length>1) return ; 
         let check_number = value -'0' ; 
          console.log("name",name,"value",value-'0');
         
         if(check_number!==check_number){  
          console.log("enetering in")
          setState({...state,[name]:''});  
          return ; 
         }
          setState({...state,[name]:value}); 
          setState_hover(parseInt(name)+1) ;  
          document.querySelector(`input[name="${parseInt(name) + 1}"]`)?.focus();

          console.log(state_hover)
     }
  return ( 

   <div className='flexcol'>   
         <h1>Enter OTP</h1>
    <div className='flexrow'>  
       <input className={`boxsize ${state_hover===1?'heightlightbox':''}`} name='1' value={state['1']} onChange={clickhandler} onClick={()=>setState_hover(1)}></input>
       <input className={`boxsize ${state_hover===2?'heightlightbox':''}`} name='2' value={state['2']} onChange={clickhandler} onClick={()=>setState_hover(2)}></input>
       <input className={`boxsize ${state_hover===3?'heightlightbox':''}`} name='3' value={state['3']} onChange={clickhandler} onClick={()=>setState_hover(3)}></input>
       <input className={`boxsize ${state_hover===4?'heightlightbox':''}`} name='4' value={state['4']} onChange={clickhandler} onClick={()=>setState_hover(4)}></input>
    </div>
   </div>
  )
}

