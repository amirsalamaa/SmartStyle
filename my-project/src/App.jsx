import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import Eyeglasses from "./Pages/Eyeglasses";
import Sunglasses from "./Pages/Sunglasses";
import Hairstyles from "./Pages/Hairstyles";
import Login from "./Pages/Login";

function App() {
  return (
    <>
    
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/eyeglasses" element={<Eyeglasses/>} />
        <Route path="/sunglasses" element={<Sunglasses/>} />
        <Route path="/Hairstyles" element={<Hairstyles/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
    
  );
}

export default App;
