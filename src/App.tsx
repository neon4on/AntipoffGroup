import * as React from 'react';
import './App.css';
import Home from './components/pages/Home';
import User from './components/pages/User';
import Login from './components/pages/Login';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/User" element={<User />} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
