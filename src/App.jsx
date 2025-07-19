import { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Components/Home'
function App() {
  const [count, setCount] = useState(0)
  return (
   
       <Router>  
      <Route path ='/' element={<Home/>}/>
     </Router>
 
  )
}

export default App
