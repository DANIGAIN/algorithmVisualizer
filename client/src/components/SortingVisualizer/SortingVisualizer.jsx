import React, { useState } from "react";
import * as SortingAlgorithm from '../SortingAlgorithms/SortingAlgorithms';
import './SortingVisualizer.css';


const NumberOfArrayBar = 35;
const animationSpeed = 100;

//--------------------------------------- use case function ------------------------//

let randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// function waitforme() {
//     return setTimeout(() => { resolve('') }, animationSpeed);
// }


let createNewArray = (array, setArray) => {
    let a = [];

    for (let i = 0; i < NumberOfArrayBar; i++) {
        a.push(randomIntFromInterval(5, 700));
    }
    setArray(a);
}
// ------------------------------------------- end use case function --------------------//
function SortingVisualizer(props) {


    const [array, setArray] = useState([]);
    const [clickCount, setClickCount] = useState(1);

    ///------------------------------------------  Implement algorithm  -------------------//
    // function bubble() {
    //     const element = document.querySelectorAll(".bar");

    //     for(let i = 0 ;i<element.length-1;i++)
    //     {
    //         for(let j = 0 ; j<element.length-i-1 ; j++)
    //         {
    //           element[j].style.background = 'blue';
    //           element[j+1].style.background = 'blue';
    //           if(parseInt(element[j].style.height) >  parseInt(element[j+1].style.background))
    //           {
    //              waitforme();
    //              swap(element[j] , element[j+1]);
    //           }
    //           element[j].style.background = 'cyan';
    //           element[j+1].style.background = 'cyan';

    //         }
    //         element[element.length-i-1].style.background = 'green';
    //     }

    // }

    //--------------------------end algorithm ----------------------------------//

    function mergeSort() {


        const animation = SortingAlgorithm.getMargeSortAnimation(array);

        for (let i = 0; i < animation.length; i++) {
            const arrayBar = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneind, barTwoind] = animation[i];
                const color = (i % 3 === 0) ? 'red' : 'turquoise';
                setTimeout(() => {

                    arrayBar[barOneind].style.backgroundColor = color;
                    arrayBar[barTwoind].style.backgroundColor = color;


                }, i * animationSpeed);
            } else {
                setTimeout(() => {
                    const [barOneind, newHight] = animation[i];
                    arrayBar[barOneind].style.height = `${newHight}px`;
                }, i * animationSpeed)
            }
        }
    }

    function handleMergeSort()
    {
        mergeSort();
    }
    //----------------------------- call to sizebar  -------------------------//

    if (props.clickCount === clickCount) {

        switch (props.clickEvent) {
            case "newArray":
                {
                    createNewArray(array, setArray);
                    setClickCount(prev => prev + 1);
                    break;
                }
            case "marge":
                {
                    handleMergeSort()
                    break;
                }
            case "bubble":
                {

                    console.log("ok");
                    break;
                }
            default:
                console.log(childClickEvent);
        }
    }

    //-------------------------------------------------------------------------------//
    return (
        <>
            <div className="responsive">
                <div className="array-container">
                    {array.map((value, index) =>
                    (
                        <div
                            className="array-bar"
                            key={index}
                            style={{ height: `${value}px` }}>
                        </div>

                    ))}



                    {/* <button onClick={() => setArray(resetArray)}> generate_new_array </button>
            <button onClick={() => mergeSort()}> mergeSort </button>
            <button onClick={() => bubbleSort()}> bubbleSort </button>
            <button onClick={() => quickSort()}>quickSort </button>
            <button onClick={() => heapSort()}> heapSort </button>
            <button onClick={() => tasingArray()}> tasingArray </button> */}


                </div>
            </div>
        </>
    )

}

export default SortingVisualizer;


