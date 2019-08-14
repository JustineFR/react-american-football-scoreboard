import React from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function scoreBoard({homeScore, awayScore}) {
    // OR (function scoreBoard(props) and then add props.homeScore and props.awayScore)
    return(
<section className="scoreboard">
    <div className="topRow">
        <div className="home">
            <h2 className="home__name">PSG</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
        </div>
        <div className="timer">00:03</div>
        <div className="away">
            <h2 className="away__name">OM</h2>
            <div className="away__score">{awayScore}</div>
        </div>
    </div>
    <BottomRow />
</section>
    )
}

export default scoreBoard;
