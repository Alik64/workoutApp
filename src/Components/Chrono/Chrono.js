import React from "react";
import CountDown from "./CountDown";
import Timer from "./Timer";

const Chrono = ({ mode = "timer", time, getTime }) => {
  console.log("mode : ", mode);
  return (
    <>
      {mode === "timer" ? (
        <Timer getTime={getTime} />
      ) : (
        <CountDown session={time} getTime={getTime} />
      )}
    </>
  );
};

export default Chrono;
