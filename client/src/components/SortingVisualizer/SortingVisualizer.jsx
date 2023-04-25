import React, { useEffect, useState } from "react";
import './SortingVisualizer.css';



let randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


export default function SortingVisualizer() {

    const [array, setArray] = useState([]);


    useEffect(() => {

         for(let i = 0  ;i<100 ; i++)
         {
            setArray([...array,array.push(randomIntFromInterval(5,1000))]);
         }
       

    }, []);

    return (
        <>
          {array.map((value ,index) =>
          (
               <div className="array-bar" key={index}> 
                  {value}
               </div>
          ))}
        </>
    )
}
