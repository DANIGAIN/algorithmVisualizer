import React, { useEffect, useRef, useState } from "react";
import './SortingVisualizer.css';



let randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


export default function SortingVisualizer() {


    const [array, setArray] = useState([]);

    useEffect(() => {

        let x = () => {
            for (let i = 0; i < 100; i++) {
                setArray([...array, array.push(randomIntFromInterval(5, 730))])
            }
        }
        return x;

    }, []);

    let mergeSort = () => { };
    let bubbleSort = () => { };
    let quickSort = () => { };
    let heapSort = () => { };


    let resetArray = () => {
        let a = [];

        for (let i = 0; i < 100; i++) {
            a.push(randomIntFromInterval(5, 730));
        }
        return a;

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

                <button onClick={() => setArray(resetArray)}> Generate New array </button>
                <button onClick={() => mergeSort()}> mergeSort </button>
                <button onClick={() => bubbleSort()}> bubbleSort</button>
                <button onClick={() => quickSort()}>quickSort </button>
                <button onClick={() => heapSort()}> heapSort </button>


            </div>
        </>
    )
}
