import React from "react";
import { useState } from "react";

export default function LikeCounter() {
  const initValue = 0;
  const [count, setCount] = useState(initValue);
  const [plusClicked, setPlus] = useState(false);

  function riseCount() {
    setCount(count + 1);
    setPlus(!plusClicked);
    console.log(plusClicked);
  }
  function lowerCount() {
    setCount(count - 1);
    setPlus(!plusClicked);
  }
  const resetCount = () => setCount(initValue);

  return (
    <div>
      <p> This post has {count} rats</p>
      <button onClick={riseCount} disabled={!plusClicked}>
        +
      </button>
      <button onClick={lowerCount} disabled={plusClicked}>
        -
      </button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}
