import "./Counter.css";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function handleIncrease() {
    setCount(count + 1);
    console.log("count is NOW:", count);
  }
  function handleDecrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  function handleReset() {
    setCount(0);
  }
  return (
    <div className="counter">
      <div className="count-display">{count}</div>
      <button className="btn-increase" onClick={handleIncrease}>
        INCREASE
      </button>
      <button className="btn-decrease" onClick={handleDecrease}>
        DECREASE
      </button>
      <button className="btn-reset" onClick={handleReset}>
        RESET
      </button>

      <p className="msg">{count >= 10 && "Amazing you have reached 10"}</p>
    </div>
  );
}
