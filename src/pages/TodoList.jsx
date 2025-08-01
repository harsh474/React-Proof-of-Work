import { useState } from 'react';
export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [current_task, setCurrent_task] = useState("");

  const handler = (() => {
    let updated_tasks = [...tasks, current_task];
    setTasks(updated_tasks); 
    setCurrent_task("");
  })  

  const delete_handler = ((ind) => {
    let updated_tasks = tasks.filter((value,index)=>index!=ind); 
    setTasks(updated_tasks) ;
  })

  return (
    <div className='container'>
      <h1>Todo List</h1>
      <div className='container'>
        <input
          type="text"
          value={current_task}
          onChange={(e) => setCurrent_task(e.target.value)}
          placeholder="Add your task" />
        <div>
          <button onClick={handler}>Submit</button>
        </div>
      </div>
      {
        tasks.map((task, index) => (
          <ul>
            <li key={index}>
              <span>{task}</span>
              <button  onClick={()=>delete_handler(index)}>Delete</button>
            </li>
          </ul>
        ))
      }

    </div>
  );
}
