import React from "react";
import "./App.css";

function Buttons(props) {
    const {homeScore, setHomeScore, awayScore, setAwayScore} = props
    console.log(props)
    return (
        <section className="buttons">
            <div className="homeButtons">
            {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
                <button onClick={() => setHomeScore(homeScore + 1)}className="homeButtons__touchdown">Home Shots</button>
                <button onClick={() => setHomeScore(homeScore + 3)}className="homeButtons__fieldGoal">Home Kicks</button>
                </div>
                <div className="awayButtons">
                <button onClick={() => setAwayScore(awayScore + 1)} className="awayButtons__touchdown">Away Shots</button>
                <button onClick={() => setAwayScore(awayScore + 3)}className="awayButtons__fieldGoal">Away Kicks</button>
            </div>
        </section>
    );
};

export default Buttons;