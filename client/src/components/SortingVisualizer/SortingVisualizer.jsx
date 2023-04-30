import React, { useEffect, useRef, useState } from "react";
import './SortingVisualizer.css';
import * as SortingAlgorithm from '../SortingAlgorithms/SortingAlgorithms'


const NumberOfArrayBar = 50 ;
const animationSpeed = 100 ;



let randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let arrayAreEqual = (arrayOne , arrayTwo) =>
{
    if(arrayOne.lenght != arrayTwo.lenght) return false ;
    for(let i = 0 ;i< arrayOne.lenght ;i++)
    {
        if(arrayOne[i] != arrayTwo[i])return false ;
    }

    return true ;
}


 function SortingVisualizer(props) {


    const [array, setArray] = useState([]);

    useEffect(() => {

        let x = () => {
            for (let i = 0; i < 100; i++) {
                setArray([...array, array.push(randomIntFromInterval(5, 730))])
            }
        }
        return x;

    }, []);

    
     function mergeSort() { 

           const  animation = SortingAlgorithm.getMargeSortAnimation(array);

           for(let i = 0 ;i< animation.length ; i++)
           {
                const arrayBar = document.getElementsByClassName('array-bar');
                const isColorChange = i%3 !== 2 ;
                if(isColorChange)
                {
                    const[barOneind , barTwoind ] = animation[i];
                    const color = ( i %3 === 0 )? 'red' : 'turquoise';
                    setTimeout(()=>{

                        arrayBar[barOneind].style.backgroundColor = color ;
                        arrayBar[barTwoind].style.backgroundColor = color ;
                    

                    }, i* animationSpeed);
                }else 
                {
                    setTimeout(()=>
                    {
                        const [barOneind , newHight] = animation[i];
                        arrayBar[barOneind].style.height = `${newHight}px`;
                    } , i* animationSpeed)
                }
           }

           
          
          
    };
    let bubbleSort = () => {
        const  animation = SortingAlgorithm.getBubbleSortAnimation(array);

           for(let i = 0 ;i< animation.length ; i++)
           {
                const arrayBar = document.getElementsByClassName('array-bar');
                const isColorChange = i%3 !== 2 ;
                if(isColorChange)
                {
                    const[barOneind , barTwoind ] = animation[i];
                    const color = ( i %3 === 0 )? 'red' : 'turquoise';
                    setTimeout(()=>{

                        arrayBar[barOneind].style.backgroundColor = color ;
                        arrayBar[barTwoind].style.backgroundColor = color ;
                    

                    }, i* animationSpeed);
                }else 
                {
                    setTimeout(()=>
                    {
                        const [barOneind , newHight] = animation[i];
                        arrayBar[barOneind].style.height = `${newHight}px`;
                    } , i* animationSpeed)
                }
           }

     };
    let quickSort = () => { };
    let heapSort = () => { };


    let resetArray = () => {
        let a = [];

        for (let i = 0; i < NumberOfArrayBar; i++) {
            a.push(randomIntFromInterval(5, 730));
        }
        return a;

    }
    let tasingArray = () => {

        const javascriptSortedArray = array.sort((a, b) => (a-b));
        const sortedArray  = SortingAlgorithm.getBubbleSortAnimation(array);
        console.log(sortedArray);

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



                <button onClick={() => setArray(resetArray)}> generate_new_array </button>
                <button onClick={() => mergeSort()}> mergeSort </button>
                <button onClick={() => bubbleSort()}> bubbleSort </button>
                <button onClick={() => quickSort()}>quickSort </button>
                <button onClick={() => heapSort()}> heapSort </button>
                <button onClick={() => tasingArray()}> tasingArray </button>


            </div>
        </>
    )
}

export default SortingVisualizer ;


