const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:5500", // Replace with your frontend URL
    methods: ["GET", "POST"]
  }
});

app.use(cors({
  origin: 'http://localhost:5500' // Replace with your frontend URL
}));

const users = {};

io.on('connection', socket => {
    socket.on('new-user-joined', name => {
        // console.log('joined', name);
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);
    });

    socket.on('send', message => {
        socket.broadcast.emit('receive', {message: message, name: users[socket.id]});
    });

    socket.on('disconnect', () => {
        socket.broadcast.emit('user-left', users[socket.id]);
        delete users[socket.id];
    });
});

server.listen(8000, () => {
  console.log('listening on *:8000');
});
