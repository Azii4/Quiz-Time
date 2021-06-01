import "../css/TimerBar.css";
import { useRef } from "react";

export default function TimerBar(props) {
  const barRef = useRef(null);

  return (
    <div class="bar">
      <div
        class="in"
        ref={barRef}
        style={
          props.start
            ? { animation: "fill 10s linear 1" }
            : { animation: "none", width: barRef.current.offsetWidth }
        }
      ></div>
    </div>
  );
}
