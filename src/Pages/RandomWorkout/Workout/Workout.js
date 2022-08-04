import React from "react";
import s from "./Workout.module.css";

const Workout = ({ workout }) => {
  return (
    <div className={s.root}>
      <h2>{workout?.name}</h2>
      <h3>
        {workout?.mode} {workout?.time && workout?.time / 60}
      </h3>
      <ul>
        {workout?.exercises?.map((exo, index) => (
          <li key={index}>{exo}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(Workout);
