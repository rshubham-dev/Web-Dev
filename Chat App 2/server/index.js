const { Server } = require('socket.io');
const io = new Server(8000, {
    cors: true,
});

const emailToSocketIdMap = new Map();
const socketToEmailIdMap = new Map();

io.on('connection', socket => {
    console.log('Socket Connected', socket.id)
    socket.on('room:join', (data) => {
        console.log(data)
        const { email, room } = data
        emailToSocketIdMap.set(email, socket.id);
        socketToEmailIdMap.set(socket.id, email);
        io.to(socket.id).emit('room:join', data);
    })
})
