import Sidebar from '../Sidebar/Sidebar';
import SortingVisualizer from '../../SortingVisualizer/SortingVisualizer';
import { Link } from 'react-router-dom';
import './style.css';
import { useEffect } from 'react';
import { Header } from '../Header/Header';

export default function Home(props) {
  

    return (
        <>
            <div className='header'>
                <Header name={props.name}/>
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