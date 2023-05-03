import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbaar from "./Components/Page/Nav/Navbaar";
import Hero from "./Components/Page/Hero/Hero";
import Home from "./Components/Page/Home/Home";
import Pakeges from "./Components/Page/Pakeges/Pakeges";
import Top_places from "./Components/Page/Top_places/Top_places";
import Book from "./Components/Page/BookNow/Book";
import Mun from "./Components/Page/Top_places/Places/Mun";
import Dar from "./Components/Page/Top_places/Places1/Dar";
import Miz from "./Components/Page/Top_places/Placese2/Miz";
import Ladakh from "./Components/Page/Top_places/Places3/Ladakh";
import Auli from "./Components/Page/Top_places/Places$/Auli";
import Footer from "./Components/Page/Footer/Footer";
import Pkg from "./Components/Page/Packages/HomeP/Pkg";
function App() {
  return (
    <div className="App">
      <Navbaar />
      <BrowserRouter>
        <Routes>
          <Route path="/hero" element={<Hero />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />

          <Route path="/pakeges" element={<Pakeges />} />
          <Route path="/top" element={<Top_places />} />
          <Route path="/book" element={<Book />} />
          <Route path="/mun" element={<Mun />} />
          <Route path="/dar" element={<Dar />} />
          <Route path="/miz" element={<Miz/>} />
          <Route path="/ladakh" element={<Ladakh/>} />
          <Route path="/auli" element={<Auli/>} />
          <Route path="/pkg" element={<Pkg/>} />






      
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
