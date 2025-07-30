import {useState,useEffect} from 'react' ;
export default function useDebounce(value, delay) {
  const [debounce,setDebounce] = useState(value) ; 
  useEffect(()=>{ 
    const interval =  setTimeout(()=>{ 
       setDebounce(value)
     },delay) 
    return (()=>  clearInterval(interval) )
  },[value,delay]);  
  return debounce ; 
}