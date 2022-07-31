import React, { useEffect, useState } from "react";

const Counter = ({ getRound }) => {
  const [count, setCount] = useState(0);
  const handleInc = () => {
    setCount((prev) => prev + 1);
  };
  const handleDec = () => {
    setCount((prev) => prev - 1);
  };

  useEffect(() => {
    getRound && getRound(count);
  }, [count]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
    </div>
  );
};

export default Counter;
