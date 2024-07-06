import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LobbyScreen from './screens/Lobby'


const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LobbyScreen/>} />
      </Routes>
    </div>
  )
}

export default App