

module.exports = (app,io)=>{

   

    app.get('/',(req,res)=>{
        res.sendFile(__dirname+'/index.html');
    });

    io.on('connection',(socket)=>{
        console.log('connected');

        socket.on('message',(data)=>{
            console.log('message received : ',data);
            io.sockets.emit('received-message',data);
        })

    })

    
}