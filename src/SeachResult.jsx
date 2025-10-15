
import React, { useEffect, useState } from 'react'


function SeachResult() {
    const [show,setShow]=useState([])
    const [favourites, setFavourites]=useState([]);

     

     useEffect(()=>{
       
        const sname=localStorage.getItem("showname")
        
        fetch(`https://api.tvmaze.com/search/shows?q=${sname}`).then((res)=>res.json())
        .then((data)=>setShow(data))
        const storedFavs = JSON.parse(localStorage.getItem("favourites"))||[];
        setFavourites(storedFavs);

        
     },[setFavourites])

     const favourite = (showId)=>{
            const favExist= favourites.find(f=>f.id===showId);
            
            let updatedFavourites;
            if(favExist){
                updatedFavourites= favourites.filter(f=>f.id!== showId);
            }
            else{
                updatedFavourites =[...favourites,{id:showId, fav:true}];
            }
            setFavourites(updatedFavourites);
            localStorage.setItem("favourites",JSON.stringify(updatedFavourites))
     }
  return (
   
    <div>
         <div className='bg-black w-full h-full'>
                    <h1 className='text-2xl text-amber-300 text-center'>Search Results</h1>
                    <div className="max-w-full rounded overflow-hidden shadow-lg">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                            { show.length>0 && show.map((a)=>(
                        <div key={a.show.id}>
                            
  <img className="w-20px" src={a.show.image.medium} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl text-amber-300 mb-2">{a.show.name}</div>
    <p className="text-gray-700 text-base">
      
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{a.show.language}</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{a.show.genres}</span>
    <button onClick={()=>favourite(a.show.id)} className={` bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2mb-2 ${show.fav ? "text-red-600":"text-gray-500"}`}>Add to favourites</button>
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