import React, { useEffect, useState } from "react";


import "../style.css";

export default function SearchingVisualizer({ newArray, newClick, speed, dispatch }) {
  speed = 1000 - speed * 10;
  const [searchElement, setSearchElement] = useState(10);
  const element = document.getElementsByClassName("array-bar");
  const [isModal, setIsModal] = useState(false);
  const [elementColors, setElementColors] = useState(Array(newArray.length).fill("black"));

  //------------------------------------------------------------ Linear Search -----------------------------------------------------------------//


  async function LinearSearch() {

    

    for (let i = 0; i < element.length; i++) {

      const updatedColors = [...elementColors];

      updatedColors[i] = "blue";
      setElementColors(updatedColors);

      if (parseInt(element[i].style.height) === parseInt(searchElement)) {
        updatedColors[i] = "green";
        setElementColors(updatedColors);
        await new Promise((resolve) => setTimeout(resolve, speed));
        alert(" This value is Found in the  List")
        break;
      }
      await new Promise((resolve) => setTimeout(resolve, speed));
      updatedColors[i] = "black";
      setElementColors(updatedColors);

      console.log(parseInt(element[i].style.height));

    }
    alert("Not found");
  }

  //--------------------------------------------------------------- Binary search --------------------------------------------------------------//

  const sortArray = () => {
    dispatch({ type: "sortedArray" });
  }

  async function BinarySearch() {

    let left = 0;
    let right = newArray.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const updatedColors = [...elementColors];

      if (parseInt(element[mid].style.height) === parseInt(searchElement)) {
        updatedColors[mid] = "green";
        setElementColors(updatedColors);
        await new Promise((resolve) => setTimeout(resolve, speed));
        alert(" This value is Found in the  List")
        return;
      } else if (parseInt(element[mid].style.height) < parseInt(searchElement)) {


        left = mid + 1;
      } else {

        right = mid - 1;
      }

      updatedColors[mid] = "blue";
      setElementColors(updatedColors);
      await new Promise((resolve) => setTimeout(resolve, speed));
    }
    alert("Not found");
  }


  //---------------------------------Modal------------------------//

  useEffect(() => {

    if (newClick === "linear" || newClick == 'binary') setIsModal(true);

  }, [newClick]);


  let modalChangeHandler = (e) => {
    setIsModal(e.target.value);

    if (newClick == 'linear') LinearSearch();
    else if (newClick == 'binary') {
      sortArray();
      BinarySearch();
    }
  }

  //-------------------------------------------------------------------------------//
  return (
    <>
      return (
      <>
        <div className={`modal2 ${!isModal ? "hide" : ""}`}>
          <div>
            <button onClick={modalChangeHandler}>X</button>
            <label htmlFor="Row" className="text">
              Enter any number
            </label>
            <input
              type="text"
              value={searchElement}
              onChange={(e) => setSearchElement(e.target.value)}
            />
          </div>
        </div>

        <div className={`array-container ${isModal ? "hide" : ""}`}>
          {newArray.map((value, index) => (
            <div
              className="array-bar"
              key={index}
              style={{ height: `${value}px`, backgroundColor: elementColors[index] }}
            >
              <span className="bar-value">{value}</span>
            </div>
          ))}
        </div>
      </>
      );

    </>
  );
}
