import React, { useContext, useEffect, useState } from "react";

import axios from "axios";
import { appContext } from "../Context/appContext";

export default function Home() {
  const [data, setData] = useState([]);
  console.log('"Home page rendered" : ', "Home page rendered");
  console.log("data : ", data);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:8080/api/v1/workouts");
      setData(result.data.data);
    };
    fetchData();
  }, []);

  const workout = data?.map((workout, index) => (
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

  return (
    <div>
      <h1>Choice your workout</h1>
      {workout}
    </div>
  );
}
// createdAt: "4/20/2022, 2:21:56 PM"
// equipment: (2) ['barbell', 'rope']
// exercises: (6) ['21 thrusters', '12 rope climbs, 15 ft', '15 thrusters', '9 rope climbs, 15 ft', '9 thrusters', '6 rope climbs, 15 ft']
// id: "61dbae02-c147-4e28-863c-db7bd402b2d6"
// mode: "For Time"
// name: "Tommy V"
// trainerTips: (3) ['Split the 21 thrusters as needed', 'Try to do the 9 and 6 thrusters unbroken', 'RX Weights: 115lb/75lb']
// updatedAt: "4/20/2022, 2:21:56 PM"
