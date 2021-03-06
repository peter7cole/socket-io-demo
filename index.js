// Express initializes app to be a function handler that you can supply to an HTTP server
const app = require('express')();
const http = require('http').createServer(app);
// initialize a new instance of socket.io by passing the http (the HTTP server) object
const io = require('socket.io')(http);
require('dotenv').config();

const PORT = process.env.PORT || 3001;

// Define a route handler / that gets called when we hit our website home
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// socket.io routes & socket actions
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.broadcast.emit('hi');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

// We make the http server listen on port 3000
http.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
