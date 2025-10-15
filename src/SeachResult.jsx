
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addFavourite, removeFavourite } from './favouriteSlice';


function SeachResult() {
    const [show,setShow]=useState([])
    const {query}=useParams();
    const favourites= useSelector((state)=>state.favourites.favourites)
    const dispatch = useDispatch();


     useEffect(()=>{
        const fetchShows = async()=>{
            const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`)
            console.log(res.data);
        setShow(res.data);
        }
        fetchShows();
     },[query])

     const toggleFavourite =(name)=>{
      console.log("favourites :",favourites)
      if (favourites.includes(name)){
        dispatch(removeFavourite(name))
      }
      else{
        dispatch(addFavourite(name));
      }
     }


     
  return (
   
    <div>
         <div className='bg-black w-full h-full'>
                    <h1 className='text-2xl text-amber-300 text-center'>Search Results</h1>
                    <div className="max-w-full rounded overflow-hidden shadow-lg">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                            { show.map((a)=>(
                        <div key={a.show?.id}>
                            
  <img className="w-20px" src={a.show?.image?.medium} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl text-amber-300 mb-2">{a.show?.name}</div>
    <p className="text-gray-700 text-base">
      
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{a.show?.language}</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{a.show?.genres}</span>
    <button onClick={()=>toggleFavourite(a.show?.name)} className={` bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2mb-2 text-red-600`}>{favourites.includes(a.show?.name) ?"remove Favourite":"add favourite"}</button>
  </div>
  </div>

   ))}
</div>
                    
</div>
                    
           
           
         </div>
    </div>
  )
}

export default SeachResult