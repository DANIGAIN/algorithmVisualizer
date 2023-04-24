import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { useEffect, useState } from 'react';
import { auth } from './firebase';

function App() {
   const [userName , setUserName] = useState('');


   useEffect(()=>{
      auth.onAuthStateChanged((user)=>
      {
         if(user)
         {
            setUserName(user.displayName);
         }else 
         {
            setUserName('');
         }
      });

   },[])


   return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
         <Route path='/' element={<Home name ={userName} />}>Home</Route>
         <Route path='/login' element={<Login/>}>Home</Route>
         <Route path='/signup' element={<Signup/>}>Home</Route>
      </Routes>
      </BrowserRouter>

    </div>
   )
}

export default App
