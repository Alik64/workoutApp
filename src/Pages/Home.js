import React, { useEffect } from "react";
import Pomodoro from "../Components/Chrono/Pomodoro";
import useFetch from "../hooks/useFetch";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Pomodoro session={1500} pause={300} />
    </div>
  );
}
export default Home;
