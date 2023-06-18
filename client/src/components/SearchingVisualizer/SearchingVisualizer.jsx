import React, { useEffect, useState } from "react";

import '../style.css'
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

export default function  SearchingVisualizer({newArray, newClick, speed})
{
    speed =  1000 - speed * 10 ;
    const[searchElement, setSearchElement]=useState(10)
    const[flag, setFlag]=useState(true)
    useEffect(()=>{
        return ()=> {
            setSearchElement(()=>prompt("Please Enter any number 0 to 500"))
        }
    }, [newClick=='binary', newClick=='linear'])

async function LinearSearch(){
    const element = document.getElementsByClassName('array-bar');

    for(let i=0; i<element.length && flag==true; i++)
    {
        element[i].style.backgroundColor = 'blue';
        if(parseInt(element[i].style.height)===parseInt(searchElement))
        {
            element[i].style.backgroundColor = 'green';
            setFlag((prev)=>false)
            console.log("Hello");
        }
        await new Promise((resolve) => setTimeout(resolve, speed));
        
    }
}
if(newClick=='linear')
{
    LinearSearch();
    console.log(newArray);
}
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