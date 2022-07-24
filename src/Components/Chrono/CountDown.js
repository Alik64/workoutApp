import React, { useState, useEffect } from "react";
import "./Pomodoro.css";
import PauseImg from "./assets/Images/pause.svg";
import PlayImg from "./assets/Images/play.svg";
import ResetImg from "./assets/Images/reset.svg";

export default function CountDown({ session }) {
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
    setSessionTime(session);
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
