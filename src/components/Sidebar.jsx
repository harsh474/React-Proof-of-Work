import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const links = [
    { to: "/", label: "About" },
    { to: "/counter", label: "Counter" },
    { to: "/stopwatch", label: "Stopwatch" },
    { to: "/usearray", label: "Usearray" },
    { to: "/usedebounce", label: "UseDebounce" },
    { to: "/datatable", label: "Pagination & DataTable" },
    { to: "/diceroller", label: "Dice Roller" },
    { to: "/like&unlike", label: "Like Unlike" }, 
    { to: "/starrating", label: "Star Rating" }, 
    { to: "/todolist", label: "Todo List" }, 
    { to: "/trafficlight", label: "Traffic Light" }, 
    { to: "/digitalclock", label: "Digital Clock" }
  ];

  return (
    <div className="w-[15%] bg-gray-800 text-white p-6 h-full flex flex-col">
      <Link to="/" className="hover:text-yellow-400">
        <h1 className="text-2xl font-bold mb-8 text-amber-200">React JS Projects</h1>
      </Link>
      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`px-4 py-2 rounded-md transition-all duration-150 ${
              currentPath === link.to
                ? "bg-gray-700 text-yellow-300"
                : "hover:bg-gray-600 hover:text-yellow-300"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
