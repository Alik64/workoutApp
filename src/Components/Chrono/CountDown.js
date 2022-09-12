import React, { useState, useEffect } from "react";
import cn from "classnames";
import "../../index.css";
import s from "./Chrono.module.css";
import Circle from "./Circle";

export default function CountDown({ session, getTime }) {
  const [sessionTime, setSessionTime] = useState(session);
  const [workingChrono, setWorkingChrono] = useState(false);

  function trigger() {
    if (sessionTime > 0) {
      setSessionTime(sessionTime - 1);
    } else {
      setWorkingChrono(false);
      return;
    }
  }

  useEffect(() => {
    let countdown;
    if (workingChrono) {
      countdown = window.setInterval(() => {
        trigger();
      }, 10);
    }
    return () => {
      window.clearInterval(countdown);
    };
  }, [workingChrono, trigger]);

  const playPause = () => {
    setWorkingChrono(!workingChrono);
  };

  const resetFunc = () => {
    if (workingChrono) {
      setWorkingChrono(!workingChrono);
    }
    setSessionTime(session);
  };

  const time = `${Math.trunc(sessionTime / 60)} : ${
    sessionTime % 60 < 10 ? `0${sessionTime % 60}` : `${sessionTime % 60}`
  }`;

  const percentage = 100 - Math.round((sessionTime / session) * 100);

  return (
    <div className={s.containerChrono}>
      <h1 className={s.time}>{time}</h1>
      <Circle percentage={percentage} className={s.circle} />
      <div className={s.containerControllers}>
        <button className={cn(s.resetBtn, "circle")} onClick={resetFunc}>
          Reset
        </button>
        <button
          className={cn(s.startBtn, "circle")}
          onClick={playPause}
          disabled={sessionTime === 0 ? true : false}
        >
          {workingChrono ? "PAUSE" : "START"}
        </button>
      </div>
    </div>
  );
}
