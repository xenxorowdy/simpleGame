import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GetAllGame from './component/GetAllGame'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import GetSingleGame from './component/GetSingleGame'
import Createpage from './component/createpage'
import EditPage from './component/editPage'
import DeleteGame from './component/deletegame'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <div className='card'>
      <a href='/allgame'>
      <button >
        getAllGame
      </button>
      </a>
      
      <a href='/getsinglegame'>
      <button>
        singleGame
      </button>
      </a>
      <a href='/createpage'>
      <button >
        create singleGame
      </button>
      </a>
      <a href='edit'>
      <button>
        editsingleGame
      </button>
      </a>
      <a href='/delete'>
      <button>
        deleteGame
      </button>
      </a>
      {/* <GetAllGame /> */}
      </div>
      <div className='alginItem'>
      <BrowserRouter>

      <Routes>
        <Route exact path="/allgame" element={<GetAllGame/>} />
        <Route exact path="/getsinglegame" element={<GetSingleGame/>} />
        <Route exact path="/createpage" element={<Createpage/>} />   
        <Route exact path="/edit" element={<EditPage/>}   /> 
        <Route exact path='/delete' element={<DeleteGame/>}/> 
        </Routes>
        {/* <Route exact path="/about" render={() => <AboutPage />} /> */}
    </BrowserRouter>
    </div>
    </div>
  )
}

export default App
