const express = require('express');
const path = require('path');
const enforce = require('express-sslify');
const app = express();
const pgp = require('pg-promise')();
const db = pgp('postgres://xtwnjqjzqbcalf:7a174aa04e7a4c7c76b7fc790efc481d5be92cf26825c0525484f541a6933cdb@ec2-54-234-28-165.compute-1.amazonaws.com:5432/d7kmkpt3tj4tnq');

if (app.get("env") === "production") {
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
}

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/test', (req, res) => {
  var d = new Date();
  var n = d.getTime();
  var dbStatus;

  db.one(`INSERT INTO public."Sample" ("Username") VALUES ('$1')`, n)
  .then(function (data) {
    dbStatus = 'Successfully added ' + n + ' to DB.';
    res.json({ msg: 'Express backend connected. Server Time: ' + n , consoleMsg: 'Express connected. Request Time: ' + n, dbStatus: dbStatus });
  })
  .catch(function (error) {
    dbStatus = 'ERROR: Could not add ' + n + ' to DB.';
    console.log('ERROR:', error)
    res.json({ msg: 'Express backend connected. Server Time: ' + n , consoleMsg: 'Express connected. Request Time: ' + n, dbStatus: dbStatus });
  })
});

app.get('*', (req, res) => {
  console.log('Path: ' + path.join(__dirname+'/client/build/index.html'));
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Express Backend listening on ${port}`);