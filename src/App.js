import { Routes, Route } from "react-router-dom";

import { Home } from "./Pages/Home";
import { Login, Register } from "./Pages/Auth";
import { RandomWorkout } from "./Pages/RandomWorkout";
import { Profile } from "./Pages/Profile";
import ProtectedRoute from "./routing/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/user-profile" element={<Profile />} />
        </Route>

        <Route path="/random" element={<RandomWorkout />} />
      </Routes>
    </div>
  );
}

export default App;
