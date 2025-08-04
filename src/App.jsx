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
import UseStarRating from "./pages/UseStarRating";
import TodoList from "./pages/TodoList"; 
import TrafficLight from "./pages/TrafficLight";
import DigitalClock from "./pages/DigitalClock";
import Tic_tac_toe from "./pages/Tic_tac_toe";
import JobBoard from "./pages/JobBoard";
import Stopwatch2 from "./pages/Stopwatch2";
export default function App() {
  return (
      <div className="flex h-screen">
        {/* Sidebar - 15% width */}
        <Sidebar />

        {/* Main Content - 85% width */}
        <div className="flex-1 p-6  overflow-y-auto " style={{color:'black', backgroundColor:'lightyellow'}}  >
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
            <Route path="/starrating" element={<UseStarRating/>}/>
            <Route path="/todolist" element={<TodoList/>}/>
            <Route path="/trafficlight" element={<TrafficLight/>}/>
            <Route path="/digitalclock" element={<DigitalClock/>}/>
            <Route path="/tictac" element={<Tic_tac_toe/>}/>
            <Route path="/jobboards" element={<JobBoard/>}/>
            <Route path="/stopwatch2" element={<Stopwatch2/>}/>
          </Routes>
        </div>
      </div>
  );
}

