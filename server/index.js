const express = require('express');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);


server.listen(5000);
const chat = require('./chat/chat');
chat(app,io );

