import React, { useState, useEffect, useCallback } from "react";
import PauseImg from "./assets/Images/pause.svg";
import PlayImg from "./assets/Images/play.svg";
import ResetImg from "./assets/Images/reset.svg";
import cn from "classnames";
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
        <button onClick={playPause}>
          <img src={workingChrono ? PauseImg : PlayImg} />
        </button>
        <button onClick={resetFunc}>
          <img src={ResetImg} />
        </button>
      </div>
    </div>
  );
}
