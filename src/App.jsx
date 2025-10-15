
import {  Route, Routes } from 'react-router-dom';
import './App.css'

import Home from './Home';
import SeachResult from './SeachResult';
import Favourites from './Favourites';


function App() {
 
  

  return (
    <>
         <Routes>
           <Route path='/' element={<Home/>}></Route>
           <Route path='/search/:query' element={<SeachResult/>}></Route>
           <Route path='/favourites' element={<Favourites/>}></Route>
        </Routes>
       
    </>
  )
}

export default App
