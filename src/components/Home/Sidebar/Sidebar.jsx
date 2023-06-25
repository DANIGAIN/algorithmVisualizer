import SortingVisualizer from "../../SortingVisualizer/SortingVisualizer";
import React, { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import './style.css';

export default function Sidebar({dispatch, ArrayBar}) {
    const sortRef = useRef(null);
    const searchRef = useRef(null);

    let handleClick = (e, field) => {
        field.current.nextElementSibling.classList.toggle("sub-menu");
        field.current.querySelector('.dropdown').classList.toggle('fa-rotate-90');
    }

     return (
         <>
             <div className="side-bar">
                 <div id="title">
                     <h2>Welcome to</h2>
                     <h1>Algorithm Vizualizer</h1>
                 </div>
                 <div className="menu">
                     <div className="item">
                         <Link className="sub-item"  name="newArray" onClick={() =>dispatch({ type: "newArray", payload : ArrayBar})}> Generate new array </Link>
                         <Link className="sub-item"  name="newGraph" onClick={() =>dispatch({ type: "newGraph", payload : true})}> Generate graph </Link>
                     </div> 
                     <div className="item">
                         <a className="sub-btn" ref={sortRef} onClick={e => handleClick(e, sortRef)} >Sorting
                             <FontAwesomeIcon icon={faAngleRight} className="fas dropdown" />
                         </a>
                         <div className="sub-menu">
                             <Link className="sub-item" name="marge" onClick={() => dispatch({ type: "marge", payload: true })}> margeSort </Link>
                             <Link className="sub-item" name="bubble" onClick={()=> dispatch({ type: "bubble", payload: true })}> bouble sort </Link>
                             <Link className="sub-item" name="selection" onClick={()=> dispatch({ type: "selection", payload: true })}>selection sort </Link>


                         </div>
                     </div>
                     <div className="item">
                         <a className="sub-btn" ref={searchRef} onClick={e => handleClick(e, searchRef)} >Searching
                             <FontAwesomeIcon icon={faAngleRight} className="fas dropdown" />
                         </a>
                         <div className="sub-menu">
                             <Link className="sub-item" name="binary" onClick={() =>dispatch({ type: "binary", value: true })} >binary search</Link>
                             <Link className="sub-item" name="linear" onClick={() =>dispatch({ type: "linear", value: true })} >linear search</Link>
                         </div>
                     </div>



                 </div>
             </div>
         </>
     )
}