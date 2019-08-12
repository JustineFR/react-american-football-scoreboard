//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
// import BottomRow from "./BottomRow";
import Buttons from "./Buttons";
import ScoreBoard from "./ScoreBoard";

function App() {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  return (
    <div className="container">
      <ScoreBoard homeScore={homeScore} awayScore={awayScore}/>
      <Buttons homeScore={homeScore} awayScore={awayScore} setHomeScore={setHomeScore} setAwayScore={setAwayScore}/>
    </div>
  );
}

export default App;
