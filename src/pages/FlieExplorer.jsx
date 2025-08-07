import { useRef, useState } from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";
import { FiFolderPlus } from "react-icons/fi";
import { AiOutlineFileAdd } from "react-icons/ai";



function FlieExplorer() {
  const [state, setState] = useState([
    {
      id: 1,
      name: 'Pages',
      folder: true,
      expand:true, 
      current:true,
      children: [
        {
          id: 3,
          name: 'about.html',
          folder: false,
          expand:true,
           current:true,
        },
        {
          id: 4,
          name: 'css',
          folder: true,
          expand: true,
           current:true,
          children: [
            {
              id: 5,
              name: 'about.css',
              folder: false,
              expand:true,
               current:true,
            },
            {
              id: 6,
              name: 'home.css',
              folder: false,
              expand:true,
               current:true,
            },
            {
              id: 7,
              name: 'style.css',
              folder: false,
              expand:true,
               current:true,
            }, {
              id: 8,
              name: 'css',
              folder: true,
              expand: true,
               current:true,
              children: [
                {
                  id: 9,
                  name: 'staricon.css',
                  folder: false,
                   expand:true,
                    current:true,
                },
                {
                  id: 10,
                  name: 'otp.css',
                  folder: false,
                   expand:true,
                    current:true,
                }
              ]
            }
          ]
        }

      ]
    },
    {
      id: 2,
      name: 'index.html',
      folder: false,
       expand:true,
        current:true,
    },
    {
      id: 11,
      name: 'Assets',
      folder: true,
      expand: true,
       current:true,
      children: [
        {
          id: 12,
          name: 'logo.png',
          folder: false,
           expand:true,
            current:true,
        },
        {
          id: 13,
          name: 'bg.jpg',
          folder: false,
           expand:true,
            current:true,
        }
      ]
    },
    {
      id: 14,
      name: 'Scripts',
      folder: true,
      expand: true, 
      current:true,
      children: [
        {
          id: 15,
          name: 'main.js',
          folder: false, 
          expand:true,
           current:true,
        },
        {
          id: 16,
          name: 'helper.js',
          folder: false,
           expand:true,
            current:true,
        }
      ]
    }

  ]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [add_status, setAdd_status] = useState(false);
  const ref = useRef(false);
  const ref_id = useRef(17);
  const parent_ref = useRef(null);

  const create_file_handler = (file_name, index) => {
    ref.current = [file_name, index];
    setAdd_status(true);
  }
  const find_node = (current_box, index) => {

    for (const child of current_box) {


      if (child.id === index) return child;

      if (child.children) {
        const result = find_node(child.children, index);
        if (result) return result;  // Stop further search once found
      }
    }

    return null;  // Return null if not found
  };
  const create_file = () => {
    let new_index = ref.current[1];
    let new_state = structuredClone(state);
    let node = find_node(new_state, new_index);
    let new_file = {
      id: ref_id.current + 1,
      name: name,
      folder: ref.current[0] === 'folder' ? true : false,
      children: [],
      ...(ref.current[0] === 'folder' && ({ expand: true }))
    }
    if (node && node.children) {
      node.children.push(new_file);
      setState(new_state);
      setName(''); // clear input
      setAdd_status(false); // hide input box
    }

    ref.current = null;
  }

  const parent_node = (current_box, index, parent_box) => {
    // console.log("parent_node is called", index); 
    console.log("current_box", current_box);
    for (const child of current_box) {
      if (child.id === index) {
        console.log("child", child)
        parent_box ? parent_ref.current = parent_box : null;
        // console.log("parent_ref",parent_ref.current);
        return child;
      }
      if (child.children) {
        const result = parent_node(child.children, index, child);
        if (result) return result;  // Stop further search once found
      }
    }
    return null;  // Not found
  };

  const delete_file_folder = (index) => {
    console.log("index", index)
    let new_state = structuredClone(state);
    parent_node(new_state, index, null);
    let parent_element = parent_ref.current ? parent_ref.current : null;
    console.log("delete_file_folder", parent_element)
    parent_element.children = parent_element.children.filter((item) => {
      return item.id != index
    });
    console.log("final_parent_element", parent_element);
    setState(new_state);
  }
  const change_add_status = () => {
    setAdd_status(n => !n);

  }
  const child_same = (children, value) => { 
    console.log("value",value)
    for (const child of children) { 
      console.log
      child.expand = value;
      child.children && child_same(child.children, value)
    } 

  }
  const change_enabled_status = (index, value) => {
    console.log('index', index, value)  
    let new_state = structuredClone(state);
    let node = find_node(new_state, index); 
    node.current = !node.current ; 
    console.log("node", node);
    child_same(node.children, value)
    setState(new_state);
  }
  function showfolder(state) {

    return state.map((item, index) => {
      return (
        <div key={item.id} className='flexcol'  >
          <div className='flexrow' style={{ alignItems: 'center', width: 'fixContent', marginLeft: '30px', ...({ display: item.expand ? 'flex' : 'none' }) }}>
            {item.folder &&(item.current ?
              <span onClick={() => change_enabled_status(item.id, !item.current) }><MdExpandMore /></span> :
              <span onClick={() => change_enabled_status(item.id, !item.current) }><MdExpandLess /></span> )}
            <h2>{item.name}</h2>
            {item.folder && <span onClick={() => create_file_handler('folder', item.id)}><FiFolderPlus /></span>}
            {item.folder && <span onClick={() => create_file_handler('file', item.id)}><AiOutlineFileAdd /></span>}
            <div onClick={() => delete_file_folder(item.id)}><MdDeleteOutline /></div>
          </div>
          <div style={{ marginLeft: '30px', ...( { display: item.expand ? 'block' : 'none' }) }} >
            {item.children && showfolder(item.children)}
          </div>
        </div>
      )
    })
  }
  return (
    <div>
      {showfolder(state)}
      <div style={{ display: add_status ? 'block' : 'none' }}>
        <h1>Enter {message} name</h1>
        <input value={name} onChange={(e) => setName(e.target.value)}></input>
        <div className='flexrow'>
          <button onClick={create_file}>Add</button>
          <button onClick={() => setAdd_status(n => !n)}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default FlieExplorer;