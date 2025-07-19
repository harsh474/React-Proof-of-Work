import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Learning from "./pages/Learning";
export default function App() {
  return (
      <div className="flex h-screen">
        {/* Sidebar - 15% width */}
        <Sidebar />

        {/* Main Content - 85% width */}
        <div className="flex-1 p-6  bg-black overflow-y-auto text-white">
          <Routes>
            <Route path="/" element={<Learning/>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
  );
}

