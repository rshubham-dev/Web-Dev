import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { useSocket } from '../context/SocketProvider';

const Lobby = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");
  const socket = useSocket();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('room:join', {email, room});
  };
  const handleJoinRoom = (data) => {
    const { email, room } = data
    navigate(`/room/${room}`);
  }

  useEffect(()=>{
    socket.on("room:join", handleJoinRoom);
    return () => {
      socket.off("room:join", handleJoinRoom)
    }
  }, [socket]);
  return (
    <div>
      <h1>Lobby</h1>
      <form onSubmit={handleSubmit}> 
        <label htmlFor="email">Email ID</label>
        <input 
        type="email" 
        id='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}/>
        <br/>
        <label htmlFor="room">Room Number</label>
        <input 
        type="text" 
        id='room'
        value={room}
        onChange={(e) => setRoom(e.target.value)}/>
        <br/>
        <button type='submit'>Join</button>
      </form>
    </div>
  )
}

export default Lobby