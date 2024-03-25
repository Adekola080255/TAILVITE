import React from "react";
import GameState from "./GameState";

function Reset({ gameState, Reset }) {
  if (gameState !== GameState.inProgress) {
    return (
      <>
        <div onClick={Reset} className="reset-button">
          Play Again
        </div>
      </>
    );
  } else {
    return;
  }
}

export default Reset;
