import React from 'react'
import '../css/position.css'
function Positions() {  

  const clickhandler = (e)=>{ 
    console.log("x",e.clientX) ; 
    console.log("y",e.clientY) ; 
  }
  const mouse_down_handler = (e)=>{ 
    console.log("x",e.clientX) ; 
  } 
  return (
    <div className='flexrow container' style={{border:'2px solid black'}}>
      <div className='style_class' id='div1'  
      onMouseDown={mouse_down_handler}
      >1</div>       
      <div className='style_class' id='div2' onClick={clickhandler} >2</div>       
      <div className='style_class' id='div3' onClick={clickhandler} >3</div>       
      <div className='style_class' id='div4' onClick={clickhandler} >4</div>       
    </div>
  )
}

export default Positions 
