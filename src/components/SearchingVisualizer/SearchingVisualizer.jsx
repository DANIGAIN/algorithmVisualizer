import React, { useEffect, useState } from "react";

import "../style.css";

export default function SearchingVisualizer({ newArray, newClick, speed }) {
  speed = 1000 - speed * 10;
  const [searchElement, setSearchElement] = useState(10);

  useEffect(() => {

      if(newClick === 'linear' || newClick === 'binary'){
        setSearchElement(() => prompt("Please Enter any number 0 to 500"));
      }
    
  }, [newClick == "linear"]);

  async function LinearSearch() {
    const element = document.getElementsByClassName("array-bar");
    let flag = 0 ;

    for (let i = 0; i < element.length; i++) {
      element[i].style.backgroundColor = "blue";
      if (parseInt(element[i].style.height) === parseInt(searchElement)) {
        element[i].style.backgroundColor = "green";
        flag = 1 ; 
      }
      else if(flag == 1)
      {
        element[i].style.backgroundColor = "black";
      }
      await new Promise((resolve) => setTimeout(resolve, speed));
    }

  }

  useEffect(() => {
    try {
      if (newClick === "linear") {
        LinearSearch().then(() => {
          alert("not Found this List");
        });
      }
    } catch (err) {
      console.log(err);
    }
  }, [newClick, newArray, searchElement, speed]);


  //-------------------------------------------------------------------------------//
  return (
    <>
      <div className="array-container">
       { newArray.map((value, index) => (
            <div
            className="array-bar"
            key={index}
            style={{ height: `${value}px` }}
          >
            <span className="bar-value">{value}</span>
          </div>
        ))}
      </div>
    </>
  );
}
