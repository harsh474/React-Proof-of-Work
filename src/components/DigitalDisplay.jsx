import React from 'react';
import '../css/DigitalDisplay.css';

function DigitalDisplay({
  a_state = true,
  b_state = true,
  c_state = true,
  d_state = true,
  e_state = true,
  f_state = true,
  g_state = true
}) {
  return (
   <div className="digit-wrapper">
  <div className="digit-container">
    <div id="segment-a" className={`horizontal-line ${a_state ? 'on' : ''}`}></div>
    
    <div className="segment-row">
      <div id="segment-f" className={`vertical-line ${f_state ? 'on' : ''}`}></div>
      <div id="segment-b" className={`vertical-line ${b_state ? 'on' : ''}`}></div>
    </div>
    
    <div id="segment-g" className={`mid-line ${g_state ? 'on' : ''}`}></div>
    
    <div className="segment-row">
      <div id="segment-e" className={`vertical-line ${e_state ? 'on' : ''}`}></div>
      <div id="segment-c" className={`vertical-line ${c_state ? 'on' : ''}`}></div>
    </div>
    
    <div id="segment-d" className={`horizontal-line ${d_state ? 'on' : ''}`}></div>
  </div>
</div>
  );
}

export default DigitalDisplay;
