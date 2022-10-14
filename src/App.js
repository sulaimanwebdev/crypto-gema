import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Trades from "./Pages/Trades";

function App() {

  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trades" element={<Trades />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
