import { useEffect, useState } from "react";
import DigitalDisplay from "../components/DigitalDisplay";
import { distance2D } from "framer-motion";
export default function DigitalClock() {
   const [time, setTime] = useState([]); 
   useEffect(() => {

      const intervalid = setInterval(() => {
         const now = new Date();
         let currentTime = now.toLocaleTimeString(); // Formats the time based on local settings  
         setTime(currentTime.split(''));
         console.log("type of data ", typeof time)
      }, 1000);

      return () => clearInterval(intervalid)
   }, []);
   const digital_obj = [
      // 0
      () => [true, true, true, true, true, true, false],
      // 1
      () => [false, true, true, false, false, false, false],
      // 2
      () => [true, true, false, true, true, false, true],
      // 3
      () => [true, true, true, true, false, false, true],
      // 4
      () => [false, true, true, false, false, true, true],
      // 5
      () => [true, false, true, true, false, true, true],
      // 6
      () => [true, false, true, true, true, true, true],
      // 7
      () => [true, true, true, false, false, false, false],
      // 8
      () => [true, true, true, true, true, true, true],
      // 9
      () => [true, true, true, true, false, true, true]
   ];

   console.log("rendering page")
   return (
      <div>
         <h2>DigitalClock : {time} </h2>

         <div style={{ display: 'flex', flexDirection: 'column', gap: '44px' }}>
            
            <div style={{ display: 'flex', flexDirection: 'row', gap: '12px' }}>
               {
                  time.map((item, index) => {
                     if (item === ":") {
                        return (
                           <div key={index} style={{ fontSize: "102px",height:"123px" }}>
                              :
                           </div>
                        );
                     }
                     {/* console.log(`type of ${item}`, typeof item)  */}
                     const digit = parseInt(item,10); 
                     console.log(`digit`,digit) ; 
                     if(isNaN(digit)) return  null; 
                     const getSegments = digital_obj[digit] 
                     console.log(getSegments)
                     const [a, b, c, d, e, f, g] = getSegments(); // extract individual segment states
                     return (
                        <DigitalDisplay
                           key={index}
                           a_state={a}
                           b_state={b}
                           c_state={c}
                           d_state={d}
                           e_state={e}
                           f_state={f}
                           g_state={g}
                        />
                     );

                  })
               }
            </div>
         </div>
      </div>
   )
}
