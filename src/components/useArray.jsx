/**
 * @template T
 * @param {T[]} defaultValue
 */ 
import { useState } from "react";

export default function useArray(defaultValue) {
    const [store_array,setStore_array] = useState(defaultValue) ;  

  const push = ((x)=> { 
     let temp =  [...store_array ] ; 
     temp.push(x); 
     setStore_array(temp); 
  }) ; 
  const update = ((index,x)=> { 
    let temp =  [...store_array ] ; 
      temp[index] = x ; 
     setStore_array(temp); 
  }) ;  
   const remove = (index) => {
    setStore_array(prev => prev.filter((_, i) => i !== index));
  };

  const filter = ((callback)=>{ 
     let temp =  [...store_array ] ; 
     temp =  temp.filter(callback) 
     setStore_array(temp); 
  })   

   const set = ((defaultValue)=>{ 
     setStore_array(defaultValue); 
  })  
   const clear = (()=>{ 
     setStore_array([]); 
  })  
  let array =  store_array ;  
//   console.log("array",store_array)
  return { array, push, update, remove, filter, set, clear } 
 
}