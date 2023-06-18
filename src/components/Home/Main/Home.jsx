import { useReducer} from 'react';
import SortingVisualizer from '../../SortingVisualizer/SortingVisualizer';
import SearchingVisualizer from '../../SearchingVisualizer/SearchingVisualizer';
import { Header } from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Structure from './Structure';
import './style.css';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();


const initialState =
{
    animationSpeed: 10,
    click: "",
    randomArray: [] ,
    NumberOfArrayBar: 35

}

let reducer = function(state ,action )
{
    switch(action.type)
    {
        case "newArray":
            const randomArray = [];
            for (let i = 0; i < state.NumberOfArrayBar; i++) {
              randomArray.push(Math.floor(Math.random() * 500));
            }
            return { ...state, randomArray };

        case "marge":
            return {...state, click : "marge"} ;
        
        case "bubble": 
           return {...state, click : "bubble"} ;

        case "selection":
            return {...state, click : "selection"} ;

        
        case "binary" :

           return {...state, click : "binary"} ;

        case "linear" :
            return {...state, click : "linear"} ;
        

        case "UPDATE_INPUT":
            return { ...state, animationSpeed: action.payload };

        default :

            state;
    }
}

export default function Home(props) {
    const [state, dispatch] = useReducer(reducer,initialState);
  
    return (
        <>
             <div className='header'>
                <Header name={props.name}  dispatch={dispatch} speed={state.animationSpeed}/>
            </div> 
              <div className="main">
                  <Structure />
                  <SearchingVisualizer speed ={state.animationSpeed} newClick={state.click} newArray={state.randomArray} />
                  <SortingVisualizer speed ={state.animationSpeed} newClick={state.click} newArray={state.randomArray}/>
              </div>
              
            <div className="Sidebar">
                <Sidebar dispatch={dispatch} ArrayBar={state.NumberOfArrayBar}/>     
             </div>
            
       

        </>
    )
}