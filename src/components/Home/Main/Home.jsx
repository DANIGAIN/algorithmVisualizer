import { useReducer, useRef, useState,useEffect} from 'react';
import SortingVisualizer from '../../SortingVisualizer/SortingVisualizer';
import SearchingVisualizer from '../../SearchingVisualizer/SearchingVisualizer';
import { Header } from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Structure from './Structure';
import PathFindingVisulizer from '../../PathFindingVisulizer/PathFindingVisulizer';
import { useNavigate } from 'react-router-dom';
import './style.css';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Modal from '../Modal/Modal';

const auth = getAuth();


function sortArray(array) {
    return array.slice().sort((a, b) => a - b);
}


const initialState =
{
    animationSpeed: 10,
    click: "",
    randomArray: [] ,
    NumberOfArrayBar: 25,
    IsGraph: false,
    IsArray: false

}



let reducer = function(state ,action )
{
    switch(action.type)
    {
        case "newArray":
            let randomArray = [];
            for (let i = 0; i < state.NumberOfArrayBar; i++) {
              randomArray.push(Math.floor(Math.random() * 500));
            }
            return { ...state, randomArray ,IsArray: true , IsGraph: false};

        case "sortedArray":
     
            let sortedArray = sortArray(state.randomArray);
    
            return { ...state, randomArray: sortedArray, IsArray: true, IsGraph: false };
    
        case "newGraph":

            return {...state , IsGraph: action.payload,IsArray:false}

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

    const nabigate = useNavigate();

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , (user)=>
        {
            if(!user)
            {
                nabigate('/login');
            }
        })

        return () => unsubscribe();

    },[nabigate]);



    //---------------- path finder visualizer state---------------//

    const [state, dispatch] = useReducer(reducer,initialState);
    const [pathClick , setPathClick] = useState('');
    const [permisionGraph , setPermissionGraph] = useState(false);
    const [NumberOfRow ,setNumberofRow] = useState(15);
    const [NumberOfCol , setNumberofCol] = useState(34);
    const [nodeValue , setNodeValue] = useState(30);
    const [startNode  , setStartNode] = useState({row : 12 ,col: 5});
    const [finishNode , setFinishNode] = useState({row : 12 , col: 20});

   let  isClickBfsHandeler = (e) =>
   {
       setPathClick(e.target.name);
     
   }
  
    return (
        <>
             <div className='header'>
                <Header name={props.name}  dispatch={dispatch} speed={state.animationSpeed}/>
            </div> 
              <div className="main">
                   <Structure />
                  {state.IsArray && <SearchingVisualizer 
                        speed ={state.animationSpeed} 
                        newClick={state.click} 
                        newArray={state.randomArray}
                        dispatch={dispatch} 
                  />}
                  {state.IsArray && <SortingVisualizer speed ={state.animationSpeed} newClick={state.click} newArray={state.randomArray}/>}
                  {state.IsGraph && <Modal 
                  
                        setPermissionGraph={setPermissionGraph} 
                        setNumberofRow={setNumberofRow}
                        setNumberofCol={setNumberofCol}
                        NumberOfRow={NumberOfRow}
                        NumberOfCol={NumberOfCol}
                        setNodeValue={setNodeValue}
                        nodeValue ={nodeValue}
                        setStartNode={setStartNode}
                        setFinishNode={setFinishNode}
                        startNode={startNode}
                        finishNode={finishNode}

                   />}
                  {permisionGraph && <PathFindingVisulizer 
                  
                      speed = {state.animationSpeed}
                      Click={pathClick} 
                      NumberOfRow={NumberOfRow} 
                      NumberOfCol={NumberOfCol} 
                      nodeValue={nodeValue} 
                      setStartNode={setStartNode}
                      setFinishNode={setFinishNode}
                      startNode={startNode}
                      finishNode={finishNode}
                      
                      />} 
              </div>
              
            <div className="Sidebar">
                <Sidebar isArray={state.IsArray} isGraph={state.IsGraph} dispatch={dispatch} ArrayBar={state.NumberOfArrayBar}  isClickBfs={isClickBfsHandeler}/>     
             </div>
            
        </>
    )
}