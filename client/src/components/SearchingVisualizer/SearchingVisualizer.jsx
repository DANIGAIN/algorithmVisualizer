import React, { useState } from "react";


const NumberOfArrayBar = 35;

//--------------------------------------- use case function ------------------------//

let randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let createNewArray = (array, setArray) => {
    let a = [];
    for (let i = 0; i < NumberOfArrayBar; i++) {
        a.push(randomIntFromInterval(5, 700));
    }
    setArray(a);
    
}




export default function  SearchingVisualizer(props)
{

    const [array ,setArray] = useState([]);
    const [clickCount, setClickCount] = useState(1);


  //---------------------------------------------------  Implement searching  algorithm  ----------------- //
   function binary()
   {
         
        console.log(" hi i am binary");
   }


   function  linear()
   {
        console.log("hi i am  linear ");
   }




    if (props.clickCount === clickCount) {

        switch (props.clickEvent) {
            case "newSearchArray":
                {
                    console.log("ok");
                    createNewArray(array, setArray);
                    setClickCount(prev => prev + 1);
                    break;
                }
            case "binary":
                {
                   
                    binary();
                    break;
                }
            case "linear":
                {

                    linear();
                    break;
                }
          
            default:
                console.log(childClickEvent);
        }
    }
//-------------------------------------------------------------------------------//
    return (
        <>
            <div className="container">
                <div className="array-container">
                    {array.map((value, index) =>
                    (
                        <div
                            className="array-bar"
                            key={index}
                            style={{ height: `${value}px` }}>
                        </div>

                    ))}


                </div>
            </div>
        </>
    )
}