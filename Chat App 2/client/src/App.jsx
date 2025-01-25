import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LobbyScreen from './screens/Lobby'
import RoomPage from './screens/Room'


const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LobbyScreen/>} />
        <Route path='/room/:roomId' element={<RoomPage/>} />
      </Routes>
    </div>
  )
}

export default App