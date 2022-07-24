import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CountDown from "../Components/Chrono/CountDown";
import Pomodoro from "../Components/Chrono/Pomodoro";
import Timer from "../Components/Chrono/Timer";

import useFetch from "../hooks/useFetch";

export default function Random() {
  const navigate = useNavigate();
  const [data, isLoading, error] = useFetch(
    "http://localhost:8080/api/v1/workouts/random"
  );

  const randomWorkout = data?.data?.map((workout, index) => (
    <div key={index}>
      <h2>{workout.name}</h2>
      <h3>Mode : {workout.mode}</h3>
      <ul>
        Exercises:
        {workout?.exercises?.map((exo, index) => (
          <li key={index}>{exo}</li>
        ))}
      </ul>
      <hr />
      <a href="https://www.radiorecord.ru/station/workout" target="_blank">
        Best music for workout 😉
      </a>
      <hr />
      {workout.timer === "timer" ? (
        <Timer />
      ) : (
        <CountDown session={workout.time} />
      )}
    </div>
  ));

  console.log('"render" : ', "render");
  return (
    <div>
      <button onClick={() => navigate("/")}>Home</button>
      <h1>Workout of the day</h1>
      {isLoading ? <div>Loading...</div> : randomWorkout}

      <button onClick={() => window.location.reload(false)}>Another one</button>
    </div>
  );
}
