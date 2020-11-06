const app = require('express')();
const http = require('http').createServer(app);
require('dotenv').config();

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

http.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
  // console.log('Listening on 3000');
});
