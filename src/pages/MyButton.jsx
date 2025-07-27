import React from 'react' ; 
import { useEffect } from 'react';
function MyButton({id}) { 
     let temp = 0 ; 
     temp += 1 ;
     const [count, setCount] = React.useState(0);
     console.log("parent is rerendering again",temp)
     useEffect(()=>{    
          console.log("hi calling useffect")
          console.log("count"+id);
          let savedcount = localStorage.getItem("count"+id) ;   
          savedcount = parseInt(savedcount);
          console.log("savedcount",typeof(savedcount))
          savedcount&& setCount(savedcount); 
     },[])
     function handleclick(params) { 
          setCount(count + 1);   
          temp = temp+1; 
          console.log("update count  of "+id , count) ;
          localStorage.setItem("count"+id, count+1);
     }
     return (
          <div>
               <h1>{count}</h1>
               <button onClick={handleclick}> Increment counter</button>
          </div>
     )
}

export default MyButton ;