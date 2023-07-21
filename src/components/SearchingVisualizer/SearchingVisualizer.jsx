import React, { useEffect, useState } from "react";

import "../style.css";

export default function SearchingVisualizer({ newArray, newClick, speed }) {
  speed = 1000 - speed * 10;
  const [searchElement, setSearchElement] = useState('');
  //-------------- binary  -->
  const [foundIndex, setFoundIndex] = useState(-1);
  const [isSearching, setIsSearching] = useState(false);

  //------------------------------------------------------------ Linear Search -----------------------------------------------------------------//


    async function LinearSearch() {
      const element = document.getElementsByClassName("array-bar");
      let flag = 0;
      console.log(searchElement);
      console.log(typeof (searchElement));
      for (let i = 0; i < newArray.length; i++) {
        console.log(newArray[i]);

        for (let i = 0; i < newArray.length; i++) {
          //   if(foundIndex == -1) element[i].style.backgroundColor = "blue";
          //   if (newArray[i] === parseInt(searchElement)) {
          //     if(foundIndex == -1) element[i].style.backgroundColor = "green";
          //     setFoundIndex(1);
          //     return ;
          //   }
          //   else if(foundIndex == 1)
          //   {
          //     element[i].style.backgroundColor = "black";
          //   }
          await new Promise((resolve) => setTimeout(resolve, speed));
          // }
          console.log(newArray[i]);
        }
      }


      //--------------------------------------------------------------- BInary search --------------------------------------------------------------//



      // const BinarySearch = () => {


      //   console.log("binary");

      //   if (!searchElement || isNaN(searchElement)) {
      //     setSearchElement(() => prompt("Please Enter any number 0 to 500"));
      //     return;
      //   }

      //   setIsSearching(true);
      //   let left = 0;
      //   let right = newArray.length - 1;
      //   let steps = [];

      //   while (left <= right) {
      //     const mid = Math.floor((left + right) / 2);
      //     steps.push({ left, mid, right });

      //     if (newArray[mid] === parseInt(searchElement)) {
      //       setFoundIndex(mid);
      //       setIsSearching(false);
      //       return;
      //     } else if (newArray[mid] < parseInt(searchElement)) {
      //       left = mid + 1;
      //     } else {
      //       right = mid - 1;
      //     }
      //   }
      //   console.log(steps);
      //   setIsSearching(false);
      //   setFoundIndex(-1);
      // };



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

        <div className={`modal2 ${!isModal ? 'hide' : " "}`}>
          <div >
            <button onClick={(e) => { setIsModal(e.target.value) }}>X</button>
            <label htmlFor="Row" className="text">Enter any number</label>
            <input type="text" value={searchElement} onChange={(e) => { setSearchElement(e.target.value) }} />
          </div>

        </div>

        
        <div className={`array-container ${isModal ? `hide` : " "}`}>

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
