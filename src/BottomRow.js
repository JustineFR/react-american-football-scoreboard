import React from "react";
import "./App.css";

const BottomRow = () => {
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Shots</h3>
        <div className="down__value">12</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">Kicks</h3>
        <div className="toGo__value">6</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Kicks</h3>
        <div className="ballOn__value">8</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Shots</h3>
        <div className="quarter__value">10</div>
      </div>
    </div>
  );
};

export default BottomRow;
