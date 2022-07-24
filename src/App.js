import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import NewWorkout from "./Pages/NewWorkout";
import "./App.css";
import Random from "./Pages/Random";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/random" element={<Random />} />
        <Route path="/newWorkout" element={<NewWorkout />} />
      </Routes>
    </div>
  );
}

export default App;
