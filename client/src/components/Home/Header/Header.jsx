import React from "react";

import './style.css';

export function Header() {
    return (
        <>




            <div className="header">

                <div className="slider">
                    <p id="rangeName">Speed</p>
                    <input type="range" min="0" max="200" value="100" value={null}/>
                        <p id="rangeValue">100</p>
                </div>
         
                <button className="btn1"><i class="fa-solid fa-play"></i>play</button>
                <button className="btn1 btn2">Log out</button>
                <h1>user</h1>
            </div>

      

        </>
    )
}