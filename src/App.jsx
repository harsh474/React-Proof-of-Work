import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Learning from "./pages/Learning";
import Counter from "./pages/Counter";
import Stopwatch from "./pages/Stopwatch";
import Usearray from "./pages/Usearray";
import UseDebounce from "./pages/UseDebounce";
import DataTable from "./pages/DataTable";
import DiceRoller from "./pages/DiceRoller";
import LikeUnlike from "./pages/LikeUnlike";
export default function App() {
  return (
      <div className="flex h-screen">
        {/* Sidebar - 15% width */}
        <Sidebar />

        {/* Main Content - 85% width */}
        <div className="flex-1 p-6  bg-black overflow-y-auto text-white">
          <Routes>
            <Route path="/learning" element={<Learning/>} />
            <Route path="/" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/counter" element={<Counter/>} />
            <Route path="/stopwatch" element={<Stopwatch/>} />
            <Route path="/usearray" element={<Usearray/>}/>
            <Route path="/usedebounce" element={<UseDebounce/>}/>
            <Route path="/datatable" element={<DataTable/>}/>
            <Route path="/diceroller" element={<DiceRoller/>}/>
            <Route path="/like&unlike" element={<LikeUnlike/>}/>
          </Routes>
        </div>
      </div>
  );
}

