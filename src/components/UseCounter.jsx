import {useState,useCallback} from 'react' ; 
export default function useCounter(initialValue=0) {
  const [count,setCount] = useState(initialValue) ;  

  const increment = useCallback(()=>{  
    setCount(count=>count+1) ;  
  },[count] )
  const decrement= useCallback(()=>{  
    setCount(count=>count-1) ;  
  },[count]  )
  const reset = useCallback(()=>{ 
    setCount(initialValue)
  },[initialValue])
 return {count,increment,decrement,reset,setCount} ; 
}