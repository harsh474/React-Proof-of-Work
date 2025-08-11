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
import UseClickAnyWhere from "./pages/UseClickAnyWhere";
import CounterII from "./pages/CounterII";
import Cycle from "./pages/Cycle";
import MortgageCalculator from "./pages/MortgageCalculator";
import Tabs from "./pages/Tabs";
import CustomArrayHook from "./pages/CustomArrayHook";
import TransferList from "./pages/TransferList";
import NestedCheckboxes from "./pages/NestedCheckboxes";
import OtpInput from "./pages/OtpInput";
import FlieExplorer from "./pages/FlieExplorer";
import StickyNotes from "./pages/StickyNotes";
import Positions from "./pages/Positions";
export default function App() {
  return (
      <div className="flex" style={{border:'10px solid black'}} >
        {/* Sidebar - 15% width */}
        <Sidebar />

        {/* Main Content - 85% width */}
        <div className="flex-1 p-6" style={{color:'black', backgroundColor:'lightyellow'}}  >
          <Routes>
            <Route path="/learning" element={<Learning/>} />
            <Route path="/" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/counter" element={<Counter/>} /> 
            <Route path="/counter2" element={<CounterII/>} /> 
            <Route path="/cycle" element={< Cycle/>} /> 
            <Route path="/mortgagecalculator" element={<MortgageCalculator/>} /> 
            <Route path="/tabs" element={<Tabs/>} /> 
            <Route path="/customarrayhook" element={<CustomArrayHook/>} /> 
            <Route path="/Useclickanywhere" element={<UseClickAnyWhere/>} /> 
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
            <Route path="/transerferlist" element={<TransferList/>}/>
            <Route path="/nestedcheckbox" element={<NestedCheckboxes/>}/>
            <Route path="/otpinput" element={<OtpInput/>}/>
            <Route path="/fileexplorer" element={<FlieExplorer/>}/>
            <Route path="/stickynotes" element={<StickyNotes/>}/>
            <Route path="/positions" element={<Positions/>}/>
          </Routes>
        </div>
      </div>
  );
}

