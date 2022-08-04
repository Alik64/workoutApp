import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Counter from "../../Components/Counter/Counter";

import { useGetRandomWorkoutQuery } from "../../redux/services/workoutsApi";

import baniere from "../../Assets/Images/baniere.jpg";
import s from "./RandomWorkout.module.css";
import Chrono from "../../Components/Chrono/Chrono";
import Workout from "./Workout";

export default function RandomWorkout() {
  const [round, setRound] = useState(0);
  const [time, setTime] = useState(null);

  const navigate = useNavigate();

  const { data, isLoading } = useGetRandomWorkoutQuery();

  const getRound = useCallback(
    (val) => {
      setRound(val);
    },
    [round]
  );

  const getTime = (val) => {
    setTime(val);
  };

  const randomWorkout = data?.data?.map((workout, index) => (
    <div key={index}>
      <div className={s.chrono}>
        <Chrono mode={workout?.timer} time={workout?.time} getTime={getTime} />
      </div>
      <div className={s.workout}>
        <button onClick={() => window.location.reload(false)}>
          Another one
        </button>
        <Workout workout={workout} />
      </div>
      <hr />
      <Counter getRound={getRound} />
    </div>
  ));

  // console.log('"render" : ', "render");
  return (
    <div className={s.root}>
      <div className={s.header}>
        <img src={baniere} alt="muscle man" />
      </div>
      <button className={s.homeBtn} onClick={() => navigate("/")}>
        Home
      </button>
      {isLoading ? <div>Loading...</div> : randomWorkout}
    </div>
  );
}
