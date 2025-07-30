import { useState } from "react";
import users from "../data/users";

export default function DataTable() {
     const [message, setMessage] = useState("Data Table");
     const [selectedvalue, setSelectedvalue] = useState(5);
     const [current, setCurrent] = useState(1)
     console.log("current", current);
     let size = users.length;
     console.log(size);
     let range = Math.ceil(size / selectedvalue);

     let temp = [];
     console.log(range);
     for (let i = 0; i < range; i++) {
          temp.push(i);
     }
     console.log(temp)
     const clickhandler = ((e) => {
          console.log(e.target);
          setCurrent(parseInt(e.target.value) + 1);
     })
     const righthandler = ((e) => {
          let temp = current === range ? 1 : current + 1;
          setCurrent(temp);
     })
     const lefthandler = ((e) => {
          let temp = current === 1 ? range : current - 1;
          setCurrent(temp);
     })
     return (
          <div style={{display:'flex', flexDirection:'column', gap:'10px',justifyContent: 'center'}}>
               <div style={{ display: 'flex', gap: '6px' }}>
                    <h2>Select Page Size </h2>
                    <select
                         style={{ width: "50px", color: 'black', background: 'white' }}
                         value={selectedvalue}
                         onChange={(e) =>{ setSelectedvalue(e.target.value), setCurrent(1)}}
                    >
                         <option>5</option>
                         <option>10</option>
                         <option>20</option>
                         <option>30</option>
                         <option>40</option>
                    </select>
               </div>
               <h1 style={{color:'white'}}>{message}</h1>
               <table
                    style={{
                         borderCollapse: 'separate',
                         borderSpacing: '12px 8px',
                         width: '100%',
                         textAlign: 'left',
                    }}
               >
                    <thead >
                         <tr >
                              {[
                                   { label: "ID", key: "id" },
                                   { label: "Name", key: "name" },
                                   { label: "Age", key: "age" },
                                   { label: "Occupation", key: "occupation" },
                              ].map(({ label, key }) => (
                                   <th

                                        key={key}>{label}</th>
                              ))}
                         </tr>
                    </thead>
                    <tbody>
                         {users
                              .slice((current - 1) * selectedvalue, (current) * selectedvalue)
                              .map(({ id, name, age, occupation }) => (
                                   <tr key={id}>
                                        <td>{id}</td>
                                        <td>{name}</td>
                                        <td>{age}</td>
                                        <td>{occupation}</td>
                                   </tr>
                              ))}
                    </tbody>
               </table>
               <div style={{ display: 'flex', gap: '10px', justifyContent: 'center',marginTop:'23px'}}>
                    <div>
                         <button
                              style={{

                                   padding: '5px 10px',
                                   margin: '4px',
                                   border: '1px solid gray',
                                   cursor: 'pointer'
                              }}
                              onClick={lefthandler}>Left</button>
                    </div>
                    <div style={{ display: 'flex', gap: '5px' }}>
                         {
                              temp.map((item, index) => (
                                   <button
                                        key={index}
                                        value={index}
                                        onClick={clickhandler}
                                        style={{
                                             backgroundColor: current === index + 1 ? 'lightgray' : 'black',
                                             padding: '5px 10px',
                                             margin: '4px',
                                             border: '1px solid gray',
                                             cursor: 'pointer'
                                        }}>{item + 1}</button>
                              ))
                         }
                    </div>
                    <div>
                         <button
                              style={{

                                   padding: '5px 10px',
                                   margin: '4px',
                                   border: '1px solid gray',
                                   cursor: 'pointer'
                              }}
                              onClick={righthandler}>Right</button>
                    </div>
               </div>
          </div>
     );
}
