import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CountDown from "../../Components/Chrono/CountDown";
import Timer from "../../Components/Chrono/Timer";
import Counter from "../../Components/Counter/Counter";

import { useGetRandomWorkoutQuery } from "../../redux/services/workoutsApi";

import baniere from "../../Assets/Images/baniere.jpg";
import s from "./RandomWorkout.module.css";
import Chrono from "../../Components/Chrono/Chrono";

export default function RandomWorkout() {
  const [round, setRound] = useState(0);
  const [time, setTime] = useState(null);

  const navigate = useNavigate();

  const { data, isLoading } = useGetRandomWorkoutQuery();

  const getRound = (val) => {
    setRound(val);
  };

  const getTime = (val) => {
    setTime(val);
  };

  const randomWorkout = data?.data?.map((workout, index) => (
    <div key={index}>
      <div className={s.chrono}>
        <Chrono mode={workout.timer} time={workout.time} getTime={getTime} />
      </div>
      <h2>{workout.name}</h2>
      <h3>
        {workout?.mode} {workout?.time && workout?.time / 60}
      </h3>
      <ul>
        {workout?.exercises?.map((exo, index) => (
          <li key={index}>{exo}</li>
        ))}
      </ul>
      <hr />
      <a href="https://www.radiorecord.ru/station/workout" target="_blank">
        Best music for workout 😉
      </a>
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
      <button onClick={() => navigate("/")}>Home</button>
      {isLoading ? <div>Loading...</div> : randomWorkout}
      <button onClick={() => window.location.reload(false)}>Another one</button>
    </div>
  );
}
