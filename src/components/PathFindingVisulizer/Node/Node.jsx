import React from "react";

export default function Node({ isStart, isFinish, onDragStart, draggble , isWall, row, col ,nodeValue }) {
  let extraClassName = isFinish 
  ? 'node-finish' 
  : isStart 
  ? 'node-started' 
  : isWall
  ? 'node-wall'
  : '' ;
  return (
    <>
      <div
        className={`node ${extraClassName}`}
        onDragStart={onDragStart}
        draggble={draggble}
        id = {`node-${row}-${col}`}
        style={{ height:`${nodeValue}px`, width: `${nodeValue}px` }}
      ></div>
    </>
  );
}
