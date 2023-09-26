import React, { useRef, useState } from 'react'
import Loader from './loader';

const GetSingleGame = () => {
    const input = useRef('');
    const [game,setGame] = useState(undefined)
    const [loading,setLoading] = useState(false)
    const handleInputChange = (event)=>{
        const inputValue = event.target.value;
        input.current = inputValue;
    }
    const handleSearch = async()=>{
        try {
            
        
        setLoading(true)
        const res = await fetch("https://incredible-vacherin-20af1a.netlify.app/.netlify/functions/api/getsingle/"+input.current).then(res=>res.json());
        console.log(res);
        setGame(res);
        }
    catch (error) {
        console.log(error)
          setGame("error occurred");  
    }
    finally{
        setLoading(false)
    }
    }
  return (
    <div>
      <input type="text"
        placeholder="Search..."
        onChange={handleInputChange}
  />
      <button disabled={loading}  onClick={handleSearch} >search</button>

      {  loading && <Loader/>}
        {!loading&&game&& 
        <div>
        <h2>Name: {game.Name}</h2>
        <p>URL: {game.Url}</p>
        <p>Author: {game.Author}</p>
      </div>
        }
    </div>
  )
}

export default GetSingleGame
