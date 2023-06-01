import { useState } from 'react';
import SortingVisualizer from '../../SortingVisualizer/SortingVisualizer';
import SearchingVisualizer from '../../SearchingVisualizer/SearchingVisualizer';
import { Header } from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './style.css';

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
const auth = getAuth();


export default function Home(props) {
    const [clickEvent, setClickEvent] = useState('');
    const [clickCount, setClickCount] = useState(0);
    const navigate = useNavigate();
    

    const [clickSearchEvent, setClickSearchEvent] = useState('');
    const [clickSearchCount, setClickSearchCount] = useState(0);

    const [speed , setSpeed] = useState(10);


    onAuthStateChanged(auth, (user) => {
        if (!user) {
         navigate('/login');
        }
      });
    function clickHandeler(e) {
        setClickEvent(e.target.name);
        setClickCount(prov => prov + 1);
    }

    function clickSearchHandeler(e)
    {
        setClickSearchEvent(e.target.name);
        setClickSearchCount(prov => prov + 1);

    }

    function setAnimationSpeed(value){
        setSpeed(value);
    }

  

    return (
        <>
            <div className='header'>
                <Header name={props.name} animationSpeed={setAnimationSpeed}/>
            </div>
            <div className="main">
                <SortingVisualizer
                    clickEvent={clickEvent}
                    clickCount={clickCount}
                    animationSpeed={speed}
                 />


                <SearchingVisualizer
                  clickCount={clickSearchCount}
                  clickEvent={clickSearchEvent}
                />
            </div>
            <div className="Sidebar">
                <Sidebar
                    LinkHandleClick={clickHandeler} 
                    LinkSearchHandleClick = {clickSearchHandeler}
                    />
                    
            </div>
            <div className='Footer'>

            </div>

        </>
    )
}