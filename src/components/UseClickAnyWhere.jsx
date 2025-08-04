import { useEffect } from "react";

export default function useClickAnywhere(handler) {
  useEffect(() => {
    const listener = (event) => {
      handler(event);
    };

    window.addEventListener("click", listener);

    // Cleanup
    return () => {
      window.removeEventListener("click", listener);
    };
  }, [handler]); // Rerun if handler changes
}
