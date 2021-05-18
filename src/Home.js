import React from "react";

export default function Home() {
  return (
    <div className="wrapper">
      {/* Wheel meny component*/}
      <h1 className="logo">Quiz-Time</h1>
      <input className="playerNamer" placeholder="Name"></input>
      <button className="leaderBoard">Leaderboard</button>
      {/*<a href="#" className="aboutUs">
        About us
  </a>*/}
    </div>
  );
}
