import { HeartIcon, SpinnerIcon } from "../components/Icons"; 
import '../css/styles.css'
import {useState,useRef} from 'react' ;  


export default function LikeUnlike() {
  const [status, setStatus] = useState(true);  
  const [isClicked,setIsClicked] = useState(false) ;  
  const [ishover,setIshover] = useState(false) ;  
  const [message, setMessage] = useState("hi my name is harsh"); 
  const [loder,setLoder] = useState(true);

  const clickhandler = (async(e)=>{    
      
      setStatus(false) 
      const url = 'https://questions.greatfrontend.com/api/questions/like-button' ;  
      let currentstatus = status ;  
      let action = status?'like':'unlike' 
      const options = {
        method: 'POST', // Or 'PUT', 'PATCH'
        headers: {
            'Content-Type': 'application/json'
        },  
        
        body: JSON.stringify({action})
    };
      let response =  await fetch(url,options)   
      response = await response.json()
      console.log("response",response) ;  
      setMessage(response.message)
      if(response.message==='Success!') { 
         setIsClicked(true); 
         setStatus(true);  
         setLoder(false)
      } 
      else{ 
        // alert(response.message) ;  
          setStatus(true) ;   
          setIsClicked(false); 
          setLoder(true) ;
      } 
     
      setIshover(false);
  })
  return ( 
    
    <div> 
      {
        status ? (
          <div >
            <button   
            className={`${isClicked ? "button-click" : ""} ${ishover ? "button-hover" : ""}`}
            onMouseEnter={()=>setIshover(true)}  
            onMouseLeave={()=>setIshover(false)} 
            onClick  ={clickhandler}
             style={{border:'1px solid', borderRadius:'5px' ,padding:'4px'}}>
              <HeartIcon /> Like
            </button>
          </div>
        ) : (
          <div>
            <button 
             className={`${ !loder ? "button-click" : ""}`}
             style={{border:'1px solid', borderRadius:'5px' ,padding:'4px'}}>
              <SpinnerIcon /> Like
            </button>
          </div> 
        )
      } 
    </div>
  );
}
