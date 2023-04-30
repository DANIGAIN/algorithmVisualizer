import SortingVisualizer from "../../SortingVisualizer/SortingVisualizer";
import React, { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import './style.css';

export default function Sidebar() {
    const sortRef = useRef(null);
    const searchRef = useRef(null);

    let handleClick = (e, field) => {
        field.current.nextElementSibling.classList.toggle("sub-menu");
        field.current.querySelector('.dropdown').classList.toggle('fa-rotate-90');
    }
    let handleLinkClick =(e,field) =>
    {
        console.log(e.currrntTarget);
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
                        <a className="sub-btn" ref={sortRef} onClick={e => handleClick(e, sortRef)} >Sorting
                            <FontAwesomeIcon icon={faAngleRight} className="fas dropdown" />
                        </a>
                        <div className="sub-menu">
                            <Link className="sub-item" 
                                  
                                   onClick={event =>
                                     handleLinkClick(event, 'bobbyhadz.com')
                                   }
                                   to="/new-array"
                                
                            
                            > generate new array </Link>
                            <a href="" className="sub-item">marge sort</a>
                            <a href="" className="sub-item">bouble sort</a>
                            <a href="" className="sub-item">selection sort</a>
                        </div>
                    </div>
                    <div className="item">
                        <a className="sub-btn" ref={searchRef} onClick={e => handleClick(e, searchRef)} >Searching
                            <FontAwesomeIcon icon={faAngleRight} className="fas dropdown" />
                        </a>
                        <div className="sub-menu">
                            <a href="" className="sub-item">binary search</a>
                            <a href="" className="sub-item">linear search</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}