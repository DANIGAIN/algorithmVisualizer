import Sidebar from '../Sidebar/Sidebar';
import SortingVisualizer from '../../SortingVisualizer/SortingVisualizer';
import { Link } from 'react-router-dom';
import './style.css';
import { useEffect } from 'react';

export default function Home(props) {

    return (
        <>
            <div className='header'>
                <h1><Link to='./signup'>signup</Link></h1>
                <h1><Link to='./login'>login</Link></h1>
            </div>
            <div className="main">
                <SortingVisualizer/>
            </div>
            <div className="Sidebar">
                <Sidebar />
            </div>
            <div className='Footer'>

            </div>

        </>
    )
}