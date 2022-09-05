import React, { useEffect, useState } from "react";
import axios from "axios";
import ArrayInput from "../Components/UI/ArrayInput";

const NewWorkout = () => {
  const initialState = {
    name: "",
    mode: "",
    timer: "",
    time: "",
    exercises: [],
  };

  const [state, setState] = useState(initialState);
  const [eq, setEq] = useState("");
  const [exercice, setExercice] = useState("");

  const handleInputChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  function addItem(e, name, value, cleanFunc) {
    e.preventDefault();
    setState((prevState) => ({
      ...prevState,
      [name]: [...prevState[name], `${value}`.toLowerCase()],
    }));
    cleanFunc();
  }
  function removeItem(item, name) {
    setState((prevState) => ({
      ...prevState,
      [name]: [...prevState[name].filter((element) => element !== item)],
    }));
  }

  const addEquipement = (e) => {
    addItem(e, "equipement", eq, () => setEq(""));
  };
  const removeEquipement = (eq) => {
    removeItem(eq, "equipement");
  };

  const addExercises = (e) => {
    addItem(e, "exercises", exercice, () => setExercice(""));
  };
  const removeExercises = (ex) => {
    removeItem(ex, "exercises");
  };

  const sendWorkout = (state) => {
    let data = JSON.stringify({
      name: state.name,
      mode: state.mode,
      timer: state.timer,
      time: state.time,
      exercises: state.exercises,
    });

    let config = {
      method: "post",
      url: "http://localhost:8080/api/v1/workouts/",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => console.log(JSON.stringify(response.data)))
      .catch((error) => console.log(error));

    setEq("");
    setExercice("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    sendWorkout(state);
    setState(initialState);
  };

  return (
    <>
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
          </div>{" "}
          <div>
            <input
              type="text"
              name="timer"
              placeholder="Timer/Reb"
              value={state.timer}
              onChange={handleInputChange}
            />
          </div>{" "}
          <div>
            <input
              type="text"
              name="time"
              placeholder="Time in sec"
              value={state.time}
              onChange={handleInputChange}
            />
          </div>
          <ArrayInput
            title="Exercices"
            name="exercises"
            placeholder="Add exercice"
            value={exercice}
            onChange={(e) => setExercice(e.target.value)}
            onClick={addExercises}
          />
        </form>
      </div>

      <div>
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
          {state.equipement?.map((eq, index) => (
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
    </>
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
