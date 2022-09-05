import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import { Login, Register } from "./Pages/Auth";

import NewWorkout from "./Pages/NewWorkout";

import RandomWorkout from "./Pages/RandomWorkout";
import { Profile } from "./Pages/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-profile" element={<Profile />} />
        <Route path="/random" element={<RandomWorkout />} />
        <Route path="/newWorkout" element={<NewWorkout />} />
      </Routes>
    </div>
  );
}

export default App;
