const io = require('socket.io')(3000)

const users = {}

io.on("connection",(socket)=>{
    socket.on("new-user-joined",nam=>{
        users[socket.id]=nam;
        socket.broadcast.emit("user-joined",nam);
    });
})

