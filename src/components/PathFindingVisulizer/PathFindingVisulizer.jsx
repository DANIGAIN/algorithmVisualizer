import React, { useEffect, useState } from "react";
import Node from "./Node/Node";
import "../style.css";

export default function PathFindingVisulizer({speed}) {

  speed =  500 - speed * 5 ;
  const [nodes, setNodes] = useState([]);
  const [startNode  , setStartNode] = useState({row : 10 ,col: 5});
  const [finishNode , setFinishNode] = useState({row : 20 , col: 20});
  const n = 24 ;
  const m = 54 ; 


  useEffect(() => {
    let newNodes = [];
    for (let row = 0; row < n; row++) {
      let CurrentRow = [];
      for (let col = 0; col < m; col++) {
        let CurrentNode = {
          row,
          col,
          isStart: row == startNode.row && col == startNode.col,
          isFinish: row == finishNode.row && col == finishNode.col,
          isWall : false , 
          isVisited : false,
          distance: Infinity,
          previousNode :null, 
        };
        CurrentRow.push(CurrentNode);
      }
      newNodes.push(CurrentRow);
    }
    setNodes(newNodes);
  }, [startNode , finishNode]);

//---------------------------------------------------  breadth first search ---------------------------------//

const getNeighbors = (node) =>
{
   const { row , col } = node ; 

   const neighbors = [] ; 

   if(row > 0) neighbors.push(nodes[row -1][col]);      // Top neighbor 
   if(row < n-1) neighbors. push(nodes[row+1][col]);    //bottom neighbor 
   if(col > 0) neighbors.push(nodes[row][col-1]);        // left neighbor
   if(col < m-1 ) neighbors.push(nodes[row][col+1])      //right neighbor


   return neighbors;

}


const findSortestPath = () =>{

  const visitedNode = bfs();
  const sortestPath = [] ;
  
  let CurrentNode = nodes[finishNode.row][finishNode.col] ; 

  while(CurrentNode && CurrentNode !== nodes[startNode.row][startNode.col])
  {
      sortestPath. unshift(CurrentNode);
      CurrentNode = CurrentNode.previousNode; 
  }

  return sortestPath ;
}


const bfs = () => 
{
       const queus = [] ; 
       const visitedNode = [] ; 


       const start  = nodes[startNode.row][startNode.col];
       const finish  = nodes[finishNode.row][finishNode.col]; 

       queus.push(start) ;
       

       start.isVisited = true ; 
       start.distance = 0 ;

       while(queus.length)
       {
            const current  = queus.shift();
            visitedNode.push(current);

            if(current === finish)
            {
                return visitedNode ;
            }


            const neighbors  = getNeighbors(current);

            for(const neighbor of neighbors)
            {
                  if(!neighbor.isVisited && !neighbor.isWall)
                  {
                      neighbor.isVisited = true ;
                      neighbor.distance = current.distance +1 ;
                      neighbor.previousNode = current ;
                      queus.push(neighbor);
                  }
            }
       }


      return visitedNode ;
}


const visulizerBFS = async () => {
  const visitedNode = bfs();

  const shortestPath = findSortestPath();

  for (let i = 1; i < visitedNode.length-1; i++) {
    await new Promise((resolve) => {
      setTimeout(() => {
        const node = visitedNode[i];
        const element = document.getElementById(`node-${node.row}-${node.col}`);
        element.classList.add('visited');
        console.log(element);
        resolve();
      },  speed);
    });
  }

  for(let i = 0 ;i< shortestPath.length-1; i++)
  {
    await new Promise((resolve) =>{

      setTimeout(() =>{

        const node = shortestPath[i] ; 
        const element = document.getElementById(`node-${node.row}-${node.col}`);
        element.classList.add('shortest-path') ;
        resolve() ;
      }, speed) ;
    });
  }
};






 //------------------------------------------------   drag and drop -----------------------------------------// 

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


  // ------------------------------------------- end drag and drop ----------------------------------------//

  return (
    <div>
      <div className="grid">
        {nodes.map((row, rowIndex) => {
          return (
            <div key={rowIndex}>
              {row.map((node, nodeIndex) => {
                const { isFinish, isStart  , isWall , row , col} = node;
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
                            draggble={isFinish || isStart ? "true" : undefined}
                            isWall = {isWall}
                            row = {row}
                            col = {col}
                         />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div>
         <button onClick={visulizerBFS} style={{float:"right"}}>visulizerBFS</button>
      </div>
    </div>
  );
}
