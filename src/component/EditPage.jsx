
import React, { useEffect, useState } from 'react';
import EditRow from './EditRow.jsx';
import Loader from './loader.jsx';

function EditPage() {
  const [data, setData] = useState(/* Your data here */);
  const [editingRow, setEditingRow] = useState(null);
  const [game,setGame] = useState(undefined)

  const handleEditClick = (row) => {
    setEditingRow(row);
  };

  const handleSaveEdit = (editedRow) => {
    fetch("https://incredible-vacherin-20af1a.netlify.app/.netlify/functions/api/update/",{
        headers:{
            "Content-Type": "application/json"
        },
        method:"PUT",
        body:JSON.stringify(editedRow)
    }).then(res=>res.json()).then(response=>{alert("edited")})
    

  };
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
        {game.map((row, index) => (
          <tr key={index}>
            <td>{row.Name}</td>
            <td>{row.Url}</td>
            <td>{row.Author}</td>
            <td>
              <button onClick={() => handleEditClick(row)}>Edit</button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>

      {/* Render edit form if editingRow is not null */}
      {editingRow && (
        <EditRow
          rowData={editingRow}
          onSave={handleSaveEdit}
          onCancel={() => setEditingRow(null)}
        />
      )}
    </div>
  );
}

export default EditPage;
