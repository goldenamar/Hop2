import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Login from "./components/Login";
import Signup from "./components/Signup"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signUp" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
