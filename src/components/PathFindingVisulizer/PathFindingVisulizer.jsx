import React, { useEffect, useState } from "react";
import Node from "./Node/Node";
import "../style.css";

export default function PathFindingVisulizer() {
  const [nodes, setNodes] = useState([]);
  const [startNode  , setStartNode] = useState({row : 10 ,col: 5});
  const [finishNode , setFinishNode] = useState({row : 20 , col: 20});


  useEffect(() => {
    let newNodes = [];
    for (let row = 0; row < 24; row++) {
      let CurrentRow = [];
      for (let col = 0; col < 54; col++) {
        let CurrentNode = {
          row,
          col,
          isStart: row == startNode.row && col == startNode.col,
          isFinish: row == finishNode.row && col == finishNode.col,
        };
        CurrentRow.push(CurrentNode);
      }
      newNodes.push(CurrentRow);
    }
    setNodes(newNodes);
  }, [startNode , finishNode]);


  const handelDragStart = (e , row ,col , isStartNode) =>{

    e.dataTransfer.setData("text/plain","");
    if(isStartNode)
    {
      e.dataTransfer.setData("text/plain","start");
    }else 
    {
      e.dataTransfer.setData("text/plain","finish");
    }

  };


  const handelDragOver = (e , row ,col ) =>{
    e.preventDefault();
  };


  const handelDrop = ( e, row ,col) =>{

    e.preventDefault();
    const droppedItem = e.dataTransfer.getData("text/plain");
    if(droppedItem == "start")
    {
      setStartNode({row ,col});
      
    }else if(droppedItem == "finish")
    {
      setFinishNode({row ,col});
    }


  }

  return (
    <>
      <div className="grid">
        {nodes.map((row, rowIndex) => {
          return (
            <div key={rowIndex}>
              {row.map((node, nodeIndex) => {
                const { isFinish, isStart } = node;
                return (
                  <div
                     key={nodeIndex}
                     style={{display:"inline-block"}}
                     onDragOver={(e) => handelDragOver(e , rowIndex , nodeIndex  )}
                     onDrop={(e) => handelDrop(e , rowIndex , nodeIndex)}
                     >
                        <Node 
                            isStart={isStart} 
                            isFinish={isFinish} 
                            onDragStart={(e) => handelDragStart(e , rowIndex,nodeIndex , isStart)}
                            draggble = {isFinish || isStart}
                         />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}
