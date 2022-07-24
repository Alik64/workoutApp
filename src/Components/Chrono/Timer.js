import React, { useState, useEffect } from "react";
import "./Pomodoro.css";
import PauseImg from "./assets/Images/pause.svg";
import PlayImg from "./assets/Images/play.svg";
import ResetImg from "./assets/Images/reset.svg";

export default function Timer() {
  const [sessionTime, setSessionTime] = useState(0);
  const [workingChrono, setWorkingChrono] = useState(false);

  function trigger() {
    setSessionTime(sessionTime + 1);
  }

  useEffect(() => {
    let id;

    if (workingChrono) {
      id = window.setInterval(() => {
        trigger();
      }, 1000);
    }

    return () => {
      window.clearInterval(id);
    };
  }, [workingChrono, trigger]);

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
    <div
      className={
        workingChrono ? "container-chrono anim-glow" : "container-chrono"
      }
    >
      <h1>{time}</h1>

      <div className="container-controllers">
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
