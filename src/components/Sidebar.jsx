import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const links = [
    { to: "/", label: "About" },
    { to: "/counter", label: "Counter" },
    { to: "/counter2", label: "Counter II" },
    { to: "/cycle", label: "Use Cycle Hook" },
    { to: "/mortgagecalculator", label: "Mortgage Calculator" },
    { to: "/tabs", label: "Multiples Tabs" },
    { to: "/customarrayhook", label: "Custom Array Hook" },
    { to: "/useclickanywhere", label: "Click Any Where" },
    { to: "/usedebounce", label: "UseDebounce" },
    { to: "/datatable", label: "Pagination & DataTable" },
    { to: "/diceroller", label: "Dice Roller" },
    { to: "/like&unlike", label: "Like Unlike" }, 
    { to: "/starrating", label: "Star Rating" }, 
    { to: "/todolist", label: "Todo List" }, 
    { to: "/trafficlight", label: "Traffic Light" }, 
    { to: "/digitalclock", label: "Digital Clock" },
    { to: "/tictac", label: "Tic Tac Toe" },
    { to: "/jobboards", label: "Job Board" },
    { to: "/stopwatch2", label: "Stopwatch" },
    { to: "/transerferlist", label: "Transfer List" },
    { to: "/nestedcheckbox", label: "Nested Checkbox" },
    { to: "/otpinput", label: "OTP Input" },
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
