import { Link, useLocation } from "react-router-dom";
import DisplayLink from "./DisplayLink";
import js_links from "../data/js_links";
import css_links from "../data/css";
import react_links from "../data/react_links";
import { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";
const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [item, setItem] = useState([
    {
      id: 0,
      name: "React",
      current: true,
      link_name: react_links
    },
    {
      id: 1,
      name: "Js",
      current: true,
      link_name: js_links,

    },
    {
      id: 2,
      name: "Css",
      current: true,
      link_name: css_links,

    },
  ])

  const change_enabled_status = (id, status) => {
    let temp = structuredClone(item); 
    console.log("id",temp); 
    temp[id].current = status;
    console.log("temp", temp);
    setItem(temp);
  }
  return (
    <div className="w-[15%] h-full  bg-gray-800 text-white flex flex-col" style={{ paddingTop: '23px', paddingLeft: '23px', gap: '46px', overflowY: 'scroll' }} >

      {
        item.map((item) => {
          console.log("item", item)
          return <div key={item.id} >

            <div className="flexrow">
              {(item.current ?
                <span onClick={() => change_enabled_status(item.id, !item.current)}><MdExpandMore /></span> :
                <span onClick={() => change_enabled_status(item.id, !item.current)}><MdExpandLess /></span>)}
              <Link to="/" className=" hover:text-yellow-400 h-full">
                <h1 className="text-2xl font-bold mb-8 text-amber-200 pb-7 pt-6" >{item.name}</h1>
              </Link>
            </div>
            <DisplayLink links={item.link_name} display_status={item.current} />
          </div>
        })
      }
    </div>

  );
};

export default Sidebar;
