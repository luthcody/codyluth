const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/api/test', (req, res) => {
  var d = new Date();
  var n = d.getTime();

  res.json({ msg: 'Express backend connected. Server Time: ' + n , consoleMsg: 'Express connected. Request Time: ' + n });
});

app.get('*', (req, res) => {
  console.log('Path: ' + path.join(__dirname+'/client/build/index.html'));
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Express Backend listening on ${port}`);