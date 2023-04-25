import React from "react";
import { SquareUI } from "./style";

function Square(props) {
  return <SquareUI onClick={props.onClick}>{props.value}</SquareUI>;
}

export default Square;
