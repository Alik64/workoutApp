import React, { useEffect, useState } from "react";
import s from "./Counter.module.css";
import cn from "classnames";
const Counter = ({ getRound }) => {
  const [count, setCount] = useState(0);
  const handleInc = () => {
    setCount((prev) => prev + 1);
  };
  const handleDec = () => {
    if (count === 0) {
      return;
    }
    setCount((prev) => prev - 1);
  };

  useEffect(() => {
    getRound && getRound(count);
  }, [count]);

  return (
    <div>
      <div className={cn("circle", s.count)}>{count}</div>
      <button className="circle" onClick={handleDec}>
        -
      </button>
      <button className="circle" onClick={handleInc}>
        +
      </button>
    </div>
  );
};

export default Counter;
