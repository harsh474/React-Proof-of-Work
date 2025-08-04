import { useState } from "react";
export default function useCycle(...args) {
  const [time, setTime] = useState(0);
  let n = args.length;
  function cycle() {
    setTime((time) => (time + 1) % n);
  }

  let mode = args[time];
  console.log(mode);
  return [mode, cycle];
}
