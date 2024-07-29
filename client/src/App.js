import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import Home from './components/Home';
import AllCharacters from './components/AllCharacters';
import CreateCharacter from './components/CreateCharacter';
import OneCharacter from './components/OneCharacter';
import OneMovie from './components/OneMovie';


function App() {

  return (
    <div>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/mcu"> MCU</Link>
        <Link to="/mcu/create">Create new Character</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mcu" element={<AllCharacters />}></Route>
        <Route path="/mcu/create" element={<CreateCharacter />}></Route>
        <Route path="/mcu/:name" element={<OneCharacter />}></Route>
        <Route path="/movie/:title" element={<OneMovie />}></Route>
      </Routes>
    </div>
  )

} // end of App

export default App;
