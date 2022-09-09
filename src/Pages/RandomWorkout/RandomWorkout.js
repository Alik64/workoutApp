import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import Counter from "../../Components/Counter/Counter";

import baniere from "../../Assets/Images/baniere.jpg";
import s from "./RandomWorkout.module.css";
import Chrono from "../../Components/Chrono/Chrono";
import { Workout } from "./Workout";

export default function RandomWorkout() {
  const [round, setRound] = useState(0);
  const [time, setTime] = useState(null);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios("/workouts/random");
      setData(res.data);
    };
    fetchData();
  }, []);
  console.log("data : ", data);
  const navigate = useNavigate();

  const getRound = useCallback(
    (val) => {
      setRound(val);
    },
    [round]
  );

  const getTime = (val) => {
    setTime(val);
  };

  // console.log('"render" : ', "render");
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
          <button onClick={() => window.location.reload(false)}>
            Another one
          </button>
          <Workout workout={data} />
        </div>
        <hr />
        <Counter getRound={getRound} />
      </div>
    </div>
  );
}
