import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import { Login, Register } from "./Pages/Auth";

import NewWorkout from "./Pages/NewWorkout";

import RandomWorkout from "./Pages/RandomWorkout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/random" element={<RandomWorkout />} />
        <Route path="/newWorkout" element={<NewWorkout />} />
      </Routes>
    </div>
  );
}

export default App;
