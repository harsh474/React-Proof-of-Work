import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[15%] bg-gray-800 text-white p-6 h-full flex flex-col">
      <h1 className="text-2xl font-bold mb-8 text-amber-200">Projects</h1>
      <nav className="flex flex-col gap-4">
        <Link to="/" className="hover:text-yellow-400">Learning</Link>
        <Link to="/about" className="hover:text-yellow-400">About</Link>
        <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
