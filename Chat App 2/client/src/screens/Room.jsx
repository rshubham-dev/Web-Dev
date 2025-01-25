import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import peer from '../service/peer'
import { useSocket } from '../context/SocketProvider';

const RoomPage = () => {
  const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [myStream, setMyStream] = useState(null);
  const handelUserJoined = ({email, id}) => {
    console.log(`Email ${email} joined room`);
    setRemoteSocketId(id);
  }
  const handleCallUser = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    const offer = await peer.getOffer();
    socket.emit("user:call", { to: remoteSocketId, offer });
    setMyStream(stream);
  }
  const handleIncommingCall = ({from, offer}) => {
    console.log(`Incomming Call`, from, offer)
  };
  useEffect(()=>{
    socket.on('user:joined', handelUserJoined);
    socket.on('incomming:call', handleIncommingCall);
    return () => {
      socket.off('user:joined', handelUserJoined)
      socket.off('incomming:call', handleIncommingCall)
    }
  }, [socket, handelUserJoined]);
  return (
    <div>
        <h1>Room Page</h1>
        <h4>{remoteSocketId ? 'Connected' : 'No one in room'}</h4>
        {
          remoteSocketId && <button onClick={handleCallUser}>Call</button>
        }
        {
          myStream && <ReactPlayer playing muted height="300px" width="300px" url={myStream} />
        }
    </div>
  )
}

export default RoomPage;