import React from "react";
import { Link } from 'react-router-dom';


export default function Home(props)
{
    return (
        <div>
            <div>
                <h1><Link to="/login">Login</Link></h1>
                <h1><Link to="/signup">Sineup</Link></h1>
            </div>
            <br />
            <br />
            <br />
            <div>
                <h2>{props.name ? `welcome to - ${props.name}`: 'please login '}</h2>
            </div>
             
            <br />
            <br />
            <br />

            <div>
                  <h1><Link to='/sortingVisualizer'>sortingVisualizer</Link></h1>
            </div>
        </div>
           

        )
}