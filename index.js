// Express initializes app to be a function handler that you can supply to an HTTP server
const app = require('express')();
const http = require('http').createServer(app);
require('dotenv').config();

const PORT = process.env.PORT || 3001;

// Define a route handler / that gets called when we hit our website home
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// We make the http server listen on port 3000
http.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
  // console.log('Listening on 3000');
});
