
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
     const [show,setShow]=useState('');

  const navigate = useNavigate();

  const search=()=>{
    console.log("show=",show)
    navigate('/search',{state:{show}});
}
  return (
    <>
         <div className='bg-black w-full h-screen'>
        <div className='flex justify-center'>
             <h2 className='text-red-500 text-2xl mt-10'>TV SHOW and Favourites App</h2>
        </div>
        <div className="flex item-center justify-center mt-20">
           <input className="shadow appearance-none border rounded w-480px py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter your show name" onChange={(e)=>{setShow(e.target.value)}}/>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={search} >
            Search
            </button>
        </div> 
      </div>
    
    </>
  )
}

export default Home