import React, { useState, useEffect } from "react";
import Board from "./board";
import "./tic.css";
import GameOver from "./Game-over";
import GameState from "./GameState";
import Reset from "./Reset";

function TicTacToe() {
  const PLAYER_X = "X";
  const PLAYER_O = "O";

  const WinningCombination = [
    // #row
    { combo: [0, 1, 2], strikeClass: "strike-row-1" },
    { combo: [3, 4, 5], strikeClass: "strike-row-2" },
    { combo: [6, 7, 8], strikeClass: "strike-row-3" },

    { combo: [0, 3, 6], strikeClass: "strike-column-1" },
    { combo: [1, 4, 7], strikeClass: "strike-column-2" },
    { combo: [2, 5, 8], strikeClass: "strike-column-3" },

    { combo: [0, 4, 8], strikeClass: "strike-diagonal-1" },
    { combo: [2, 4, 6], strikeClass: "strike-diagonal-2" },
  ];

  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  const [strikeClass, setStrikeClass] = useState();
  const [gameState, setGameState] = useState(GameState.inProgress);

  function checkWinner(tiles, setStrikeClass, setGameState) {
    for (const { combo, strikeClass } of WinningCombination) {
      const tileValue1 = tiles[combo[0]];
      const tileValue2 = tiles[combo[1]];
      const tileValue3 = tiles[combo[2]];

      if (
        tileValue1 !== null &&
        tileValue1 === tileValue2 &&
        tileValue1 === tileValue3
      ) {
        setStrikeClass(strikeClass);
        if (tileValue1 === PLAYER_X) {
          setGameState(GameState.playerXwins);
        } else {
          setGameState(GameState.playerOwins);
        }
        return;
      }
    }

    const areAllTileFilled = tiles.every((tile) => tile !== null);
    if (areAllTileFilled) {
      setGameState(GameState.draw);
    }
  }
  const ResetGame = () => {
    setGameState(GameState.inProgress);
    setTiles(Array(9).fill(null));
    setPlayerTurn(PLAYER_X);
    setStrikeClass(null);
  };

  useEffect(() => {
    checkWinner(tiles, setStrikeClass, setGameState);
  }, [tiles]);

  const handleTileClick = (index) => {
    if (gameState === GameState.inProgress) {
      if (tiles[index] !== null) {
        return;
      }

      const newTiles = [...tiles];
      newTiles[index] = playerTurn;
      setTiles(newTiles);

      if (playerTurn === PLAYER_X) {
        setPlayerTurn(PLAYER_O);
      } else {
        setPlayerTurn(PLAYER_X);
      }
    } else {
      return;
    }
  };
  return (
    <>
      <div className="font-fredoka">
        <h1 className="header">Tic Tac Toe</h1>
        <Board
          tiles={tiles}
          onTileClick={handleTileClick}
          strikeClass={strikeClass}
        />
        <GameOver gameState={gameState} />
        <Reset gameState={gameState} Reset={ResetGame} />
      </div>
      <div className="label">{playerTurn}</div>
    </>
  );
}

export default TicTacToe;
