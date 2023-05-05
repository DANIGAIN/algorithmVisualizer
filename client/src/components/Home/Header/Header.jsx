import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { auth } from '../../../firebase';
import { signOut } from "firebase/auth";
import './style.css';
import { Link, useNavigate } from "react-router-dom";

export function Header(props) {
    const navigate = useNavigate();
    const[rangeHandaler, setRangeHandaler]=useState(1);


    function logOutHandaler(){
        signOut(auth).then(() => {
            navigate('/login');
        }).catch((error) => {
            
        });
    }
    
    function changeHandaler(e){
        setRangeHandaler((prev)=>e.target.value)
    }
    return (
        <>

            <div className="header">

                <div className="slider">
                    <p id="rangeName">Speed</p>
                    <input type="range" min="0" max="200"  />
                        <p id="rangeValue">100</p>
                </div>
         
                <button className="btn1 fbtn"><FontAwesomeIcon icon={faPlay} className="pbtn"/>play</button>
                <button className="btn1 btn2" onClick={logOutHandaler}>Log out</button>
                <h1><FontAwesomeIcon icon={faUser} className="ubtn"/>{props.name}</h1>
            </div>
      

        </>
    )
}