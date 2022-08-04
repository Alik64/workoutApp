import React, { useState, useEffect } from "react";
import PauseImg from "./assets/Images/pause.svg";
import PlayImg from "./assets/Images/play.svg";
import ResetImg from "./assets/Images/reset.svg";

import s from "./Chrono.module.css";
import cn from "classnames";

export default function Timer({ getTime }) {
  const [sessionTime, setSessionTime] = useState(0);
  const [workingChrono, setWorkingChrono] = useState(false);

  useEffect(() => {
    let timer;

    if (workingChrono) {
      timer = window.setInterval(() => {
        setSessionTime((sessionTime) => sessionTime + 1);
      }, 1000);
    }

    return () => {
      window.clearInterval(timer);
    };
  }, [workingChrono, setSessionTime]);

  const playPause = () => {
    setWorkingChrono(!workingChrono);
  };

  const resetFunc = () => {
    if (workingChrono) {
      setWorkingChrono(!workingChrono);
    }
    setSessionTime(0);
  };

  const time = `${Math.trunc(sessionTime / 60)} : ${
    sessionTime % 60 < 10 ? `0${sessionTime % 60}` : `${sessionTime % 60}`
  }`;

  return (
    <div className={cn(s.containerChrono, { [s.animglow]: workingChrono })}>
      <h1 className={s.time}>{time}</h1>

      <div className={s.containerControllers}>
        <button onClick={playPause}>
          {workingChrono ? "PauseImg" : "PlayImg"}
        </button>
        <button onClick={resetFunc}>reset</button>
      </div>
    </div>
  );
}
