import React, { useState, useRef } from 'react';

function StickyNotes() {
     const [positions, setPosition] = useState([{ id: 1, note: '', x: 0, y: 0 }]); // initial position
     const isDragging = useRef(false);
     const startPos = useRef([{ id: 1, x: 0, y: 0 }]);


     const mousedown_handler = (e, index) => {
          let position, new_startPos;
          for (const temp of positions) {
               if (temp.id === index) {
                    position = temp ; 
                    break;
               }
          }
          for (let temp of startPos.current) {
               if (temp.id === index) {
                    temp = { 
                        ...temp,
                         x: e.clientX - position.x,
                         y: e.clientY - position.y
                    }
               }
          }

          isDragging.current = true;
          // Store where the mouse was clicked relative to the sticky note
          // startPos.current = {
          //      x: e.clientX - position.x,
          //      y: e.clientY - position.y
          // };

          // Listen for mousemove & mouseup globally
          document.addEventListener('mousemove', () => mousemove_handler(e, index));
          document.addEventListener('mouseup', () => mouseup_handler(e, index));
     };

     const mousemove_handler = (e, index) => {
          if (isDragging.current) {
               setPosition({
                    x: e.clientX - startPos.current.x,
                    y: e.clientY - startPos.current.y
               });
          }
     };
     const mouseup_handler = () => {
          isDragging.current = false;
          // Remove global listeners
          document.removeEventListener('mousemove', mousemove_handler);
          document.removeEventListener('mouseup', mouseup_handler);
     };

     return (
          <>
               {
                    positions.map((item,index) => (
                         <div
                              key={item.id}
                              style={{
                                   width: '150px',
                                   height: '150px',
                                   border: '3px solid black',
                                   position: 'absolute',
                                   left: item.x,
                                   top: item.y,
                                   background: 'lightyellow',
                                   cursor: 'grab',
                                   boxShadow: '2px 2px 10px rgba(0,0,0,0.2)'
                              }}
                              onMouseDown={(e) => mousedown_handler(e, item.id)}
                         >
                              <textarea
                                   style={{
                                        width: '100%',
                                        height: '100%',
                                        border: 'none',
                                        resize: 'none',
                                        background: 'transparent',
                                        outline: 'none'
                                   }}
                              />
                         </div>
                    ))
               }
          </>
     );
}

export default StickyNotes;
