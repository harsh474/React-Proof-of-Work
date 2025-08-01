import {useState,useEffect,useRef} from 'react' ; 

export default function TrafficLight() {  
   const ref = useRef(null) ;  
  useEffect(()=>{ 
    ref.current = 0 ; 
  },[]); 
  const [count,setCount] = useState(0) ;
  const [color,setColor] = useState(['Red','Yellow','Green']);   
  const [delay,setDelay] = useState([8000,9000,8000]);   
  useEffect(()=>{ 
  const interval =   setInterval(()=>{
       let t = (count+1)%3 ;  
       
       setCount(t) ;
    },delay[count]) ; 
   return ()=>clearInterval(interval); 
  },[count]) 
  const  handler = ()=>{ 
      
  }
  return( 
    <div style={{backgroundColor:color[count], width:'100%',height:'100%'} }> 
      
     </div>
  );
}
