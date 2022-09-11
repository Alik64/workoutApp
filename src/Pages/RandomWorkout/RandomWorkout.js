import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "../../axios";

import Counter from "../../Components/Counter/Counter";

import baniere from "../../Assets/Images/baniere.jpg";
import shuffle from "./Assets/images/shuffle.png";
import { Chrono } from "../../Components/Chrono";
import { Workout } from "./Workout";
import cn from "classnames";
import s from "./RandomWorkout.module.css";

export default function RandomWorkout() {
  const [round, setRound] = useState(0);
  const [time, setTime] = useState(null);
  const [data, setData] = useState();

  const navigate = useNavigate();

  const fetchData = async () => {
    const res = await axios("/workouts/random");
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getRound = (val) => {
    setRound(val);
  };

  const getTime = (val) => {
    setTime(val);
  };

  return (
    <div className={s.root}>
      <div className={s.header}>
        <img src={baniere} alt="muscle man" />
      </div>
      <button className={s.homeBtn} onClick={() => navigate("/")}>
        Home
      </button>
      <div>
        <div className={s.chrono}>
          <Chrono mode={data?.timer} time={data?.time} getTime={getTime} />
        </div>
        <div className={s.workout}>
          <button
            className={cn(s.shuffleBtn, "btn")}
            onClick={() => window.location.reload(false)}
          >
            <img src={shuffle} alt="shuffle ico" className="btn" />
          </button>
          <Workout workout={data} />
        </div>
        <hr />
        <Counter getRound={getRound} />
      </div>
    </div>
  );
}
