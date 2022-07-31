import React, { useState, useEffect, useReducer } from "react";
import PauseImg from "./assets/Images/pause.svg";
import PlayImg from "./assets/Images/play.svg";
import ResetImg from "./assets/Images/reset.svg";
import s from "./Chrono.module.css";

export default function Pomodoro({ session, pause }) {
  const [sessionTime, setSessionTime] = useState(session);
  const [sessionTimeFixed, setSessionTimeFixed] = useState(session);

  const [breakTime, setBreakTime] = useState(pause);
  const [breakTimeFixed, setBreakTimeFixed] = useState(pause);

  const [workingChrono, setWorkingChrono] = useState(false);
  const [state, dispatch] = useReducer(reducer);

  function reducer(state, action) {
    switch (action.type) {
      case "TICK":
        if (sessionTime >= 0) {
          setSessionTime(sessionTime - 1);
        } else if (breakTime >= 1) {
          setBreakTime(breakTime - 1);
        } else if (breakTime <= 0 && breakTime <= 0) {
          setSessionTime(sessionTimeFixed);
          setBreakTime(breakTimeFixed);
        }
    }
  }

  function triger() {
    if (sessionTime >= 0) {
      setSessionTime(sessionTime - 1);
    } else if (breakTime >= 1) {
      setBreakTime(breakTime - 1);
    } else if (breakTime <= 0 && breakTime <= 0) {
      setSessionTime(sessionTimeFixed);
      setBreakTime(breakTimeFixed);
    }
  }

  useEffect(() => {
    let id;

    if (workingChrono) {
      id = window.setInterval(() => {
        dispatch({ type: "TICK" });
      }, 1000);
    }

    return () => {
      window.clearInterval(id);
    };
  }, [workingChrono, triger]);

  const playPause = () => {
    setWorkingChrono(!workingChrono);
  };

  const handleSession = (e) => {
    const el = e.target;

    if (el.classList.contains("minus")) {
      if (sessionTime / 60 > 1) {
        setSessionTime(sessionTime - 60);
        setSessionTimeFixed(sessionTimeFixed - 60);
      }
    } else if (el.classList.contains("plus")) {
      setSessionTime(sessionTime + 60);
      setSessionTimeFixed(sessionTimeFixed + 60);
    }
  };

  const handleBreak = (e) => {
    const el = e.target;

    if (el.classList.contains("minus")) {
      if (breakTime / 60 > 1) {
        setBreakTime(breakTime - 60);
        setBreakTimeFixed(breakTimeFixed - 60);
      }
    } else if (el.classList.contains("plus")) {
      setBreakTime(breakTime + 60);
      setBreakTimeFixed(breakTimeFixed + 60);
    }
  };

  const resetFunc = () => {
    if (workingChrono) {
      setWorkingChrono(!workingChrono);
    }
    setSessionTime(sessionTimeFixed);
    setBreakTime(breakTimeFixed);
  };
  const sessionTimeScreen = `${Math.trunc(sessionTime / 60)} : ${
    sessionTime % 60 < 10 ? `0${sessionTime % 60}` : `${sessionTime % 60}`
  }`;

  const breakTimeScreen = `${Math.trunc(breakTime / 60)} : ${
    breakTime % 60 < 10 ? `0${breakTime % 60}` : `${breakTime % 60}`
  }`;

  return (
    <div
      className={
        workingChrono ? "container-chrono anim-glow" : "container-chrono"
      }
    >
      <div className="container-config">
        <div className="box-btns session">
          <button className="minus" onClick={handleSession}>
            -
          </button>
          <span>{sessionTimeFixed / 60}</span>
          <button className="plus" onClick={handleSession}>
            +
          </button>
        </div>

        <div className="box-btns break">
          <button className="minus" onClick={handleBreak}>
            -
          </button>
          <span>{breakTimeFixed / 60}</span>
          <button className="plus" onClick={handleBreak}>
            +
          </button>
        </div>
      </div>

      <h1>
        {sessionTime >= 0 ? (
          <span style={{ color: "white" }}>{sessionTimeScreen}</span>
        ) : (
          <span>{breakTimeScreen}</span>
        )}
      </h1>

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
