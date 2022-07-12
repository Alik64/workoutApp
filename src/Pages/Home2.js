import React from "react";
import useFetch from "../hooks/useFetch";

function Home2() {
  const [data, isLoading, error] = useFetch(
    "http://localhost:8080/api/v1/workouts"
  );

  const workouts = data?.data?.map((workout, index) => (
    <div key={index}>
      <h2>{workout.name}</h2>
      <h3>Mode : {workout.mode}</h3>
      <ul>
        Exercises:
        {workout?.exercises?.map((exo, index) => (
          <li key={index}>{exo}</li>
        ))}
      </ul>
    </div>
  ));
  console.log('"render" : ', "render");
  return (
    <div>
      <h1>Choice your workout</h1>
      {isLoading && <h1>LOADING...</h1>}
      {error && <h1>{error}</h1>}
      {workouts}
    </div>
  );
}
export default Home2;
