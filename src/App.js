import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "./components/home";
import Login from './components/login';
import Logout from './components/logout';
import Admin from './components/admin';


export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </div>

  );
}
