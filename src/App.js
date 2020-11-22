import React from "react";
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import ProfileImage from './components/ProfileImage/ProfileImage';

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <ProfileImage />
      <Home />
    </div>
  );
}

export default App;
