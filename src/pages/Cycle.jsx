
import useCycle from "../components/UseCycle";
export default function Cycle() {
  const [mode, cycle] = useCycle('low', 'medium', 'high');
  return (
    <div className="flexcol">
      <h1>Implement a useCycle hook that cycles through a sequence of values each time its function is called.</h1>
      <p>State: {mode}</p>
      <button onClick={cycle}>Cycle</button>
    </div>
  );
}
