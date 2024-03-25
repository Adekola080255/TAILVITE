import React from "react";
import GameState from "./GameState";

function GameOver({ gameState }) {
  switch (gameState) {
    case GameState.inProgress:
      return <></>;
    case GameState.playerOwins:
      return <div className="game-over">Player O wins</div>;
    case GameState.playerXwins:
      return <div className="game-over">Player X wins</div>;
    case GameState.draw:
      return <div className="game-over">Draw: No winner</div>;
    default:
      break;
  }
}

export default GameOver;
