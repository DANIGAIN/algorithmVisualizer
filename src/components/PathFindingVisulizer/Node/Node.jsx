import React from "react";


export default function Node({isStart , isFinish ,onDragStart , draggble})
{

    let extraClassName = isFinish ? 'node_finish': isStart ? 'node_started' : '' ;
    return (
        <>
         <div className={`node ${extraClassName}`} onDragStart={onDragStart} draggble={draggble} >

         </div>
        </>
    );
}