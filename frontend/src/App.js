import React from "react";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile/Profile";
import TicketsContainer from "./components/TicketsContainer/TicketsContainer";

function App() {
  return (
    <div className="main">
      <Background />
      <div className="nav-wrapper">
        <Navbar />
      </div>
      <div className="wrapper">
        <div className="content">
          <Profile />
          <TicketsContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
