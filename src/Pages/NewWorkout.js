import React, { useState } from "react";
import axios from "axios";
import ArrayInput from "../Components/ArrayInput";

const NewWorkout = () => {
  const initialState = {
    name: "",
    mode: "",
    equipement: [],
    exercises: [],
    trainerTips: [],
  };

  const [state, setState] = useState(initialState);
  const [equipement, setEquipement] = useState("");
  const [exercice, setExercice] = useState("");

  const handleInputChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const addEquipement = (e) => {
    e.preventDefault();
    setState((prevState) => ({
      ...prevState,
      equipement: [...prevState.equipement, equipement],
    }));
    setEquipement("");
  };
  const removeEquipement = (eq) => {
    setState((prevState) => ({
      ...prevState,
      equipement: [
        ...prevState.equipement.filter((equipement) => equipement !== eq),
      ],
    }));
  };

  const addExercises = (e) => {
    e.preventDefault();
    setState((prevState) => ({
      ...prevState,
      exercises: [...prevState.exercises, exercice],
    }));
    setExercice("");
  };
  const removeExercises = (ex) => {
    setState((prevState) => ({
      ...prevState,
      exercises: [...prevState.exercises.filter((exercise) => exercise !== ex)],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    setState(initialState);
    setEquipement("");
    setExercice("");
  };

  return (
    <div style={{ display: "flex" }}>
      <form onSubmit={handleSubmit} style={{ paddingRight: "20px" }}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Workout name"
            value={state.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="mode"
            placeholder="Mode"
            value={state.mode}
            onChange={handleInputChange}
          />
        </div>
        <ArrayInput
          title="Equipment"
          name="equipement"
          placeholder="Add equipement"
          value={equipement}
          onChange={(e) => setEquipement(e.target.value)}
          onClick={addEquipement}
        />
        <ArrayInput
          title="Exercices"
          name="exercises"
          placeholder="Add exercice"
          value={exercice}
          onChange={(e) => setExercice(e.target.value)}
          onClick={addExercises}
        />
      </form>

      <div>
        <h1>Recap</h1>
        <div>
          <h3>Name</h3>
          {state.name}
        </div>
        <hr />
        <div>
          <h3>Mode</h3>
          {state.mode}
        </div>
        <hr />
        <div>
          <h3>Equipement</h3>
          {state.equipement.map((eq, index) => (
            <div key={index}>
              {eq}
              <button onClick={() => removeEquipement(eq)}>-</button>
            </div>
          ))}
        </div>
        <hr />
        <div>
          <h3>Exercises</h3>
          {state.exercises.map((ex, index) => (
            <div key={index}>
              {ex}
              <button onClick={() => removeExercises(ex)}>-</button>
            </div>
          ))}
        </div>
        <button onClick={handleSubmit}>Add</button>
      </div>
    </div>
  );
};

export default NewWorkout;

// {
//     "name": "Core Buster",
//     "mode": "AMRAP 20",
//     "equipment": [
//       "rack",
//       "barbell",
//       "abmat"
//     ],
//     "exercises": [
//       "15 toes to bars",
//       "10 thrusters",
//       "30 abmat sit-ups"
//     ],
//     "trainerTips": [
//       "Split your toes to bars into two sets maximum",
//       "Go unbroken on the thrusters",
//       "Take the abmat sit-ups as a chance to normalize your breath"
//     ]
//   }
