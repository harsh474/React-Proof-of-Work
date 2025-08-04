import {useState} from 'react' ;  
import '../css/tabs.css'
 export default function Tabs() { 
  const [active,setActive] = useState('html') ;   

  return (
    <div>
      <div className='flexrow'>
        <button className={active==="html"?'button-active ':'button-inactive '} onClick={(e)=>setActive('html')}>HTML</button>
        <button className={active==="css"?'button-active ':'button-inactive '} onClick={(e)=>setActive('css')}>CSS</button>
        <button className={active==="javascript"?'button-active ':'button-inactive '} onClick={(e)=>setActive('javascript')}>JavaScript</button>
      </div> 
      { 
       active==='html'&&(
      <div>
        <p>
          The HyperText Markup Language or HTML is the
          standard markup language for documents designed to
          be displayed in a web browser.
        </p>
        
      </div> )
       } 
       { 
       active==='css'&&(
      <div>
       
        <p>
          Cascading Style Sheets is a style sheet language
          used for describing the presentation of a document
          written in a markup language such as HTML or XML.
        </p>
       
      </div> )
       }
       { 
       active==='javascript'&&(
      <div>
    
        <p>
          JavaScript, often abbreviated as JS, is a
          programming language that is one of the core
          technologies of the World Wide Web, alongside HTML
          and CSS.
        </p>
      </div> )
       }
    </div>
  );
}
