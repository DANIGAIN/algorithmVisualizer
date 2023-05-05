import React, { useEffect, useRef, useState } from "react";
import './SortingVisualizer.css';
import * as SortingAlgorithm from '../SortingAlgorithms/SortingAlgorithms'


const NumberOfArrayBar = 50;
const animationSpeed = 100;



let randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let arrayAreEqual = (arrayOne, arrayTwo) => {
    if (arrayOne.lenght != arrayTwo.lenght) return false;
    for (let i = 0; i < arrayOne.lenght; i++) {
        if (arrayOne[i] != arrayTwo[i]) return false;
    }

    return true;
}


function SortingVisualizer(props) {
    const [array, setArray] = useState([]);
    const [clickCount, setClickCount] = useState(1);

    let resetArray = () => {
        let a = [];

        for (let i = 0; i < NumberOfArrayBar; i++) {
            a.push(randomIntFromInterval(5, 730));
        }
        return a;

    }

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



    if (props.clickCount === clickCount ) {
      
        switch (props.clickEvent) {
            case "newArray":
                {
                    setArray(resetArray());
                    setClickCount(prev => prev +1);
                    break;
                }
            case "marge":
                {
                    mergeSort()
                    break;
                }
            default:
                console.log(childClickEvent);
        }
    }


    return (

        <>
            <div className="array-container">
                {array.map((value, index) =>
                (
                    <div
                        className="array-bar"
                        key={index}
                        style={{ height: `${value}px` }}>


                    </div>
                ))}
                <br />
            </div>
        </>
    )
}

export default SortingVisualizer;


