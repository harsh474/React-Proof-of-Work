import React from 'react'
import { Link, useLocation } from "react-router-dom";

function DisplayLink(props) {
     const location = useLocation();
     const currentPath = location.pathname; 
     const links = props.links ||[] ;    
     const display_status = props.display_status ; 
     return (
          <div style={{paddingLeft:'33px',paddingTop:'8px', display:display_status?'block':'none'}}>
               <nav className="flex flex-col gap-2" >
                    {links.map((link) => (
                         <Link
                              key={link.to}
                              to={link.to}
                              className={`rounded-md transition-all duration-150 ${currentPath === link.to
                                        ? "bg-gray-700 text-yellow-300"
                                        : "hover:bg-gray-600 hover:text-yellow-300"
                                   }`}
                         >
                              {link.label}
                         </Link>
                    ))}
               </nav>
          </div>
     )
}

export default DisplayLink