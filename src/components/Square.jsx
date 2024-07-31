import { useState } from "react";
import "/src/App.css";

export default function Square({ value, onSquareClick}) {
  return <button className="square" onClick={onSquareClick}>{value}</button>
}