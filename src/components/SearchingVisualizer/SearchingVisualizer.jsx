import React, { useEffect, useState } from "react";

import "../style.css";

export default function SearchingVisualizer({ newArray, newClick, speed }) {
  speed = 1000 - speed * 10;
  const [searchElement, setSearchElement] = useState(10);
  const [isModal, setIsModal] = useState(false);

  async function LinearSearch() {
    const element = document.getElementsByClassName("array-bar");
    let flag = 0;
console.log(searchElement);
console.log(typeof(searchElement));
    for (let i = 0; i < newArray.length; i++) {
      console.log(newArray[i]);
    //   element[i].style.backgroundColor = "blue";
    //   if (parseInt(element[i].style.height) === parseInt(searchElement)) {
    //     element[i].style.backgroundColor = "green";
    //     flag = 1;
    //   }
    //   else if (flag == 1) {
    //     element[i].style.backgroundColor = "black";
    //   }
    //   await new Promise((resolve) => setTimeout(resolve, speed));
    // }


  }
  }
  useEffect(() => {
    try {
      if (newClick === "linear") {
        setIsModal(true)
        LinearSearch().then(() => {
          
        });
      }
    } catch (err) {
      console.log(err);
    }
  }, [newClick]);

//---------------------------------Modal------------------------//


  //-------------------------------------------------------------------------------//
  return (
    <>

      <div className={`modal2 ${!isModal?'hide':" "}`}>
        

          <div >
            <button onClick={(e)=>{setIsModal(e.target.value)}}>X</button>
            <label htmlFor="Row" className="text">Enter any number</label>
            <input type="text" value={searchElement} onChange={(e)=>{setSearchElement(e.target.value)}} />
          </div>
        
      </div>
      <div className={`array-container ${isModal?`hide`:" "}`}>

        {newArray.map((value, index) => (
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
