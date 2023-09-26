import React, { useEffect, useState } from 'react'
import Loader from './loader'

const DeleteGame = () => {
    const [game,setGame] = useState(undefined)
    useEffect(()=>{
        fetch("https://incredible-vacherin-20af1a.netlify.app/.netlify/functions/api/allgame").then(res=>res.json()).then(response=>setGame(response))
    },[])
    const handledeleteClick = async(name)=>{
        const res = await fetch("https://incredible-vacherin-20af1a.netlify.app/.netlify/functions/api/delete/"+name,{
            method:"DELETE"
        })
        setGame(pre=>{
            return pre.filter((item) => item.Name !== name)
        })

        
    }
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
                }
                </td>
                <td>
              <button onClick={() => handledeleteClick(ele.Name)}>delete</button>
            </td>
                </tr>
            ))
          }
          </tbody>
          </table>

    </div>
  )
}

export default DeleteGame
