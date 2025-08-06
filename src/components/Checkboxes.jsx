import { interpolate } from 'framer-motion';
import React, { useRef, useState } from 'react'

function Checkboxes(props) {
  const parent_ref = useRef(null);
  const [boxes, setBoxes] = useState(props.defaultCheckboxData);

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

  const parent_node = (current_box, index,parent_box) => {
    // console.log("parent_node is called", index); 
    console.log("current_box", current_box);
    for (const child of current_box) {
      if (child.id === index) {
        console.log("child", child)
        parent_box?parent_ref.current = parent_box:null;
        // console.log("parent_ref",parent_ref.current);
        return child;
      }
      if (child.children) {
        const result = parent_node(child.children, index,child);
        if (result) return result;  // Stop further search once found
      }
    }
    return null;  // Not found
  };




  const parent = (current_box, index) => {
    parent_node(current_box, index,null);
    const parent_element = parent_ref.current ? parent_ref.current : null; 
    if(parent_element===null) return ; 
    console.log("parent_element", parent_element)
    parent_element.count += 1;
    if (parent_element.count === parent_element.children.length) {
      parent_element.checked = true;
    }

  }


  const child_same = (children, value) => {
    for (const child of children) {
      child.checked = value;
      child.children && child_same(child.children, value)
    }
  }


  const clickhandler = (e, index, value) => {
    let current_box = structuredClone(boxes);
    let current_node = find_node(current_box, index);
    console.log("clickhandler called ", current_node)
    current_node.checked = value;
    parent(current_box, index);
    current_node.children && child_same(current_node.children, value);
    setBoxes(current_box);
    parent_ref.current = null;
  }


  const rendercheckboxes = (boxes) => {
    return boxes.map((box) => {
      return (<div key={box.id} style={{ marginLeft: '20px', gap: '12px' }} className='flexcol'>
        <div className='flexrow'>
          <input type='checkbox' checked={box.checked} onChange={(e) => clickhandler(e, box.id, !box.checked)} />
          <label>{box.name}</label>
        </div>
        {box.children && rendercheckboxes(box.children)}
      </div>)
    })
  }
  return (
    <div>{rendercheckboxes(boxes)}</div>
  )
}

export default Checkboxes