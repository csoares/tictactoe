import React from "react";
import Board from "../Board/index.";
import { GameContainer, GameInfo, OrderedList } from "./style";

const Game = () => {
  return (
    <GameContainer>
      <Board />
      <GameInfo>
        <OrderedList>{/* TODO */}</OrderedList>
      </GameInfo>
    </GameContainer>
  );
};

export default Game;
