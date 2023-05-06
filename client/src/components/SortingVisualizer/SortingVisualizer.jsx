import React, { useState } from "react";
import * as SortingAlgorithm from '../SortingAlgorithms/SortingAlgorithms';
import './SortingVisualizer.css';


const NumberOfArrayBar = 35;
const animationSpeed = 100;

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
// ------------------------------------------- end use case function --------------------//
function SortingVisualizer(props) {


    const [array, setArray] = useState([]);
    const [clickCount, setClickCount] = useState(1);

    ///------------------------------------------  Implement algorithm  -------------------//
    async function bubble() {
        const element = document.getElementsByClassName('array-bar');

        for (let i = 0; i < element.length; i++) {
            for (let j = 0; j < element.length - i - 1; j++) {

                element[j].style.backgroundColor = 'blue';
                element[j + 1].style.backgroundColor = 'blue';
                let val = parseInt(element[j].style.height);
                let val1 = parseInt(element[j + 1].style.height);

                if (val > val1) {
                    await new Promise((resolve) =>
                        setTimeout(() => {
                            resolve();
                        }, animationSpeed)
                    );

                    // swaping -->

                    let tamp = element[j].style.height;
                    element[j].style.height = element[j + 1].style.height;
                    element[j + 1].style.height = tamp;


                }
                element[j].style.backgroundColor = 'cyan';
                element[j + 1].style.backgroundColor = 'cyan';

            }
            element[element.length - i - 1].style.backgroundColor = 'green';


        }

    }


    async function selection() {
        const element = document.getElementsByClassName('array-bar');
        for (let i = 0; i < element.length; i++) {
            let min = i;
            element[i].style.backgroundColor = 'blue';
            for (let j = i + 1; j < element.length; j++) {
                element[j].style.backgroundColor = 'red';

                await new Promise((resolve) =>setTimeout(() => {resolve();}, animationSpeed));
                let val = parseInt(element[j].style.height);
                let val1 = parseInt(element[min].style.height);
                if (val < val1) {
                     
                     if (min !== i) {
  
                        element[min].style.backgroundColor = 'cyan';
                      }
                      min = j;
                }else

                element[j].style.backgroundColor = 'cyan';
            
            }
            if (min !== i) {
                let tamp = element[i].style.height;
                element[i].style.height = element[min].style.height;
                element[min].style.height = tamp;
            }
            await new Promise((resolve) =>setTimeout(() => {resolve();}, animationSpeed ));

            element[min].style.backgroundColor ='cyan';
            element[i].style.backgroundColor = 'green';
        }

    }

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
                    mergeSort();
                    break;
                }
            case "bubble":
                {

                    bubble();
                    break;
                }
            case "selection":
                {
                    selection();
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


