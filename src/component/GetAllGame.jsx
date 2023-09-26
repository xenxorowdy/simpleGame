import React, { useEffect, useState } from 'react'
import Loader from './loader'

const GetAllGame = () => {
    const [game,setGame] = useState(undefined)
    useEffect(()=>{
        fetch("https://incredible-vacherin-20af1a.netlify.app/.netlify/functions/api/allgame").then(res=>res.json()).then(response=>setGame(response))
    },[])

    if(game===undefined) return(
       <Loader/>
    )
  return (
    <div>
      <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Url</th>
              <th>Author</th>
              <th>publish Date</th>
            </tr>
          </thead>
          <tbody>

          {
            game.map(ele=>(
                <tr key={ele["_id"]}>
                    <td>{ele["Name"]}</td>
                    <td>{ele["Url"]}</td>
                    <td>{ele["Author"]}</td>
                    <td>{new Date(ele["published Date"]).toUTCString()
}</td>
                </tr>
            ))
          }
          </tbody>
          </table>

    </div>
  )
}

export default GetAllGame
