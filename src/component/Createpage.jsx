import React, { useEffect, useState } from 'react';

function Createpage() {
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [author, setAuthor] = useState('');
    const [check,setCheck] = useState(true)
    

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleUrlChange(event) {
    setUrl(event.target.value);
  }

  function handleAuthorChange(event) {
    setAuthor(event.target.value);
  }
  async function handleCreate(){
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
        Name:name,
        Url:url,
        Author:author
    })
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: body,
        redirect: 'follow'
      };
    const response = await fetch("https://incredible-vacherin-20af1a.netlify.app/.netlify/functions/api/create",requestOptions);
    console.log(response)
    alert("created");
    console.log(body)

  }
  useEffect(()=>{
    if(name&&url&&author){
        setCheck(false)
        
    }
    else{
        // alert("fill of all details");
        setCheck(true)
    }
  },[name,url,author])
  return (
    <div>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
      />

      <label>URL:</label>
      <input
        type="text"
        value={url}
        onChange={handleUrlChange}
      />

      <label>Author:</label>
      <input
        type="text"
        value={author}
        onChange={handleAuthorChange}
      />
      <button onClick={handleCreate} > create </button>

      <div>
        <h2>Name: {name}</h2>
        <p>URL: {url}</p>
        <p>Author: {author}</p>
      </div>
    </div>
  );
}

export default Createpage;
