import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFavourite } from './favouriteSlice';

function Favourites() {
    const favourites=useSelector((state)=>state.favourites.favourites);
    const dispatch= useDispatch();
    useEffect(()=>{
        console.log("favourites",favourites)
    })
  return (
   <>
         
            <div className=" justify-center bg-black w-full h-screen">
                <div className='w-full text-center'><h2 className='text-xl text-amber-300 p-10'>Your Favourites</h2></div>
                 
                {
                    
            favourites.length === 0 ?(<h3 className='text-red-600 text-center'>Yo have No favourites</h3> ):
            (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {
                        favourites.map((name)=>(
                            <div key={name} className='border rounded p-4 flex flex-col items-center'>
                                <h3>{name}</h3>
                                <button onClick={dispatch(removeFavourite(name))}>Remove</button>
                            </div>
                        ))
                    }
                </div>
            )
        }
            </div>
             
      
   
   </>

  )
}

export default Favourites