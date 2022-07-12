import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import NewWorkout from "./Pages/NewWorkout";
import "./App.css";
import Home2 from "./Pages/Home2";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alt" element={<Home2 />} />
        <Route path="/newWorkout" element={<NewWorkout />} />
      </Routes>
    </div>
  );
}

export default App;
