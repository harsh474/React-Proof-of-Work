import { interpolate } from 'framer-motion';
import React, { useState } from 'react'

function Checkboxes(props) {
  const [boxes, setBoxes] = useState(props.defaultCheckboxData);

  const find_node = (current_box, index) => {
    console.log("find_node is called", index);

    for (const child of current_box) {
      console.log("id", child.id);
      console.log("index", index);
      console.log(child.id === index);

      if (child.id === index) return child;

      if (child.children) {
        const result = find_node(child.children, index);
        if (result) return result;  // Stop further search once found
      }
    }

    return null;  // Return null if not found
  };

  const parent_node = (current_box, index) => {
    console.log("parent_node is called", index);

    for (const child of current_box) {
      if (child.id === index) {
        return current_box.find(parent =>
          parent.children?.some(c => c.id === index)
        ); // this finds the actual parent object
      }

      if (child.children) {
        const result = parent_node(child.children, index);
        if (result) return result;
      }
    }

    return null;  // Not found
  };




  const parent = (current_box, index) => {
    const parent_element = parent_node(current_box, index);
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
    // parent(current_box, index);
    current_node.children && child_same(current_node.children, value);
    setBoxes(current_box);
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