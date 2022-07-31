import React from "react";
import CountDown from "./CountDown";
import Timer from "./Timer";

const Chrono = ({ mode, time, getTime }) => {
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
