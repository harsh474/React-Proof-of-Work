import { useState } from "react";
export default function TransferList() {
     const [left, setLeft] = useState([
          ['HTML', false],
          ['Javascript', false],
          ['CSS', false],
          ['TypeScript', false]
     ]);
     const [right, setRight] = useState([
          ['React', false],
          ['Angular', false],
          ['Vue', false],
          ['Svelte', false]
     ]);

     const transfer_ltor = () => {
          let checked_array_left = left.filter((item) => {
               return item[1] === true
          });
          // console.log("checked_array_left",checked_array_left)
          let left_array_of_left = left.filter((item) => {
               return item[1] !== true
          });
          // console.log("left_array_of_left", left_array_of_left)
          setRight([...right, ...checked_array_left]);
          setLeft(left_array_of_left);
     };
     const transfer_rtol = () => {
          let checked_array_right = right.filter((item) => {
               return item[1] === true
          });
          let left_array_of_right = right.filter((item) => {
               return item[1] !== true
          });
          setLeft([...left, ...checked_array_right]);
          setRight(left_array_of_right);

     };

     const transfer_left_all = () => {
          setRight([...right, ...left]);
          setLeft([]);
     };

     const transfer_right_all = () => {
          setLeft([...left, ...right]);
          setRight([]);
     };

     const changehandlerleft = (index) => {
          // console.log("changehandlerleft")
          let temp = [...left];
          temp[index][1] = !temp[index][1];
          setLeft(temp);
          // console.log(leconsoleft);
     }
     const changehandlerright = (index) => {
          console.log("changehandlerright")
          let temp = [...right];
          temp[index][1] = !temp[index][1];
          setRight(temp);

     }

     return (
          <>
                <h1 className="text-2xl font-bold mb-8 red">Transfer List</h1>
               <div className="flexrow" style={{ gap: '88px' }}>
                    <div className="flexcol" style={{ gap: '18px' }}>
                         {
                              left.map((item, index) => {
                                   console.log("left_item", item)
                                   return (<div className="flexrow" key={index}>
                                        <input type="checkbox" checked={item[1]} value={item[1]} onChange={() => changehandlerleft(index)}></input>
                                        <h1>{item}</h1>
                                   </div>)
                              })
                         }
                    </div>
                    <div className="flexcol" style={{ gap: '18px' }}>
                         {/* First div - double left arrow */}
                         <div className="border  flex items-center justify-center rounded bg-gray-100 " style={{ padding: '5px' }} onClick={transfer_right_all}>
                              &laquo;
                         </div>

                         {/* Second div - single left arrow */}
                         <div className="border  flex items-center justify-center rounded bg-gray-100" style={{ padding: '1px' }} onClick={transfer_rtol}>
                              &lt;
                         </div>

                         {/* Third div - single right arrow */}
                         <div className="border  flex items-center justify-center rounded bg-gray-100 " style={{ padding: '1px' }} onClick={transfer_ltor}>
                              &gt;
                         </div>

                         {/* Last div - double right arrow */}
                         <div className="border  flex items-center justify-center rounded bg-gray-100 " style={{ padding: '5px' }} onClick={transfer_left_all}>
                              &raquo;
                         </div>
                    </div>

                    <div className="flexcol" style={{ gap: '18px' }}>
                         {
                              right.map((item, index) => {
                                   console.log(item)
                                   return (<div className="flexrow" key={index}>
                                        <input type="checkbox" checked={item[1]} onChange={() => changehandlerright(index)}></input>
                                        <h1>{item[0]}</h1>
                                   </div>)
                              })
                         }
                    </div>

               </div>
          </>
     );
}
