import React, { useState } from "react";

import '../style.css'

export default function  SearchingVisualizer({newArray})
{


//-------------------------------------------------------------------------------//
    return (
        <>
         <div className="array-container">
           {newArray.map((value, index) =>
                    (
                        <div
                            className="array-bar"
                            key={index}
                            style={{ height: `${value}px` }}>
                        </div>

                    ))}
         </div>
    
        </>
    )
}