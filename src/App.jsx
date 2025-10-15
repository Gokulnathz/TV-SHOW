
import {  Route, Routes } from 'react-router-dom';
import './App.css'

import Home from './Home';
import SeachResult from './SeachResult';


function App() {
 
  

  return (
    <>
         <Routes>
           <Route path='/' element={<Home/>}></Route>
           <Route path='/search/:query' element={<SeachResult/>}></Route>
        </Routes>
       
    </>
  )
}

export default App
