import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import INeedHelp from "./components/INeedHelp.js";
import ICanHelp from "./components/ICanHelp.js";
import Login from "./pages/Login.js";
import Profile from "./pages/Profile.js";
import Register from "./pages/Register.js";
import Footer from "./components/Footer.js";
import UsefulLinks from "./pages/UsefulLinks.js";
import FormTable from "./pages/FormTable.js";
import FormDetail from "./pages/FormDetail.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ineedhelp" element={<INeedHelp />} />
          <Route path="/icanhelp" element={<ICanHelp />} />
          <Route path="/forms" element={<FormTable />} />
          <Route path="/forms/detail/:id" element={<FormDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/usefullinks" element={<UsefulLinks />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
