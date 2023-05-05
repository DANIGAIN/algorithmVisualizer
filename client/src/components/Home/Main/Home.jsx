import { useState } from 'react';
import SortingVisualizer from '../../SortingVisualizer/SortingVisualizer';
import { Header } from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './style.css';

export default function Home(props) {
    const [clickEvent, setClickEvent] = useState('');
    const [clickCount, setClickCount] = useState(0);
    function clickHandeler(e) {
        setClickEvent(e.target.name);
        setClickCount(prov => prov + 1);
    }

    return (
        <>
            <div className='header'>
                <Header />
            </div>
            <div className="main">
                <SortingVisualizer
                    clickEvent={clickEvent}
                    clickCount={clickCount} />
            </div>
            <div className="Sidebar">
                <Sidebar
                    LinkHandleClick={clickHandeler} />
            </div>
            <div className='Footer'>

            </div>

        </>
    )
}