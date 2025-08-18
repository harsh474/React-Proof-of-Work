import { useState, useEffect } from "react";
import "../css/fade.css";

export default function FadeDemo() {
  // Individual states for each demo
  const [showBasic, setShowBasic] = useState(false);
  const [showDelay, setShowDelay] = useState(false);
  const [showSlide, setShowSlide] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showList, setShowList] = useState(false);

  // Sequential fade list effect
  useEffect(() => {
    if (showList) {
      document.querySelectorAll(".fade-list").forEach((el, i) => {
        el.style.transitionDelay = `${i * 0.2}s`;
        el.classList.add("show");
      });
    } else {
      document.querySelectorAll(".fade-list").forEach(el => {
        el.style.transitionDelay = "0s";
        el.classList.remove("show");
      });
    }
  }, [showList]);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>CSS Fade Transitions Demo</h1>

      {/* Basic Fade */}
      <section>
        <h3>1. Basic Fade</h3>
        <button onClick={() => setShowBasic(!showBasic)}>Toggle</button>
        <div className={`fade ${showBasic ? "show" : ""}`} style={{ marginTop: "10px" }}>
          Basic Fade In/Out
        </div>
      </section>

      <hr />

      {/* Fade with Delay */}
      <section>
        <h3>2. Fade with Delay</h3>
        <button onClick={() => setShowDelay(!showDelay)}>Toggle</button>
        <div className={`fade delay ${showDelay ? "show" : ""}`} style={{ marginTop: "10px" }}>
          Fades in after 0.3s delay
        </div>
      </section>

      <hr />

      {/* Fade + Slide */}
      <section>
        <h3>3. Fade + Slide</h3>
        <button onClick={() => setShowSlide(!showSlide)}>Toggle</button>
        <div className={`fade-slide ${showSlide ? "show" : ""}`} style={{ marginTop: "10px" }}>
          Fades & Slides Up
        </div>
      </section>

      <hr />

      {/* Fade Overlay */}
      <section>
        <h3>4. Fade Overlay</h3>
        <button onClick={() => setShowOverlay(!showOverlay)}>Toggle</button>
        <div className={`overlay ${showOverlay ? "show" : ""}`}></div>
      </section>

      <hr />

      {/* Sequential Fade List */}
      <section>
        <h3>5. Sequential Fade List</h3>
        <button onClick={() => setShowList(!showList)}>Toggle</button>
        <ul style={{ marginTop: "10px", listStyle: "none", padding: 0 }}>
          <li className="fade fade-list">Item 1</li>
          <li className="fade fade-list">Item 2</li>
          <li className="fade fade-list">Item 3</li>
        </ul>
      </section>
    </div>
  );
}



