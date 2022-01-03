import { Routes, Route } from 'react-router-dom'
import './App.css';
import Workout from './Components/Workout/Workout';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workout:id" element={<Workout />} />
      </Routes>
    </div>



  );
}

export default App;
