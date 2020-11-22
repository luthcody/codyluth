const express = require('express');
const path = require('path');
const enforce = require('express-sslify');
const app = express();
const { Pool, Client } = require('pg');

const pool = new Pool({
  user: 'dbuser',
  host: 'database.server.com',
  database: 'mydb',
  password: 'secretpassword',
  port: 3211,
  ssl: {
    rejectUnauthorized: false,
  },
})

// the pool will emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

if (app.get("env") === "production") {
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
}

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/test', async(req, res) => {
  var d = new Date();
  var n = d.getTime();
  var dbStatus;

  await pool.connect().then(async client => {
    return await client.query(`INSERT INTO public."Sample" ("Username") VALUES ('$1') RETURNING "ID"`, n)
      .then(res => {
        client.release()
        console.log(res.rows[0])
      })
      .catch(err => {
        client.release()
        console.log(err)
      })
  });

  // db.one(`INSERT INTO public."Sample" ("Username") VALUES ('$1') RETURNING "ID"`, n)
  // .then(function (data) {
  //   console.log(data);
  //   dbStatus = 'Successfully added ' + data.ID + ' to DB.';
  //   res.json({ msg: 'Express backend connected. Server Time: ' + n , consoleMsg: 'Express connected. Request Time: ' + n, dbStatus: dbStatus });
  // })
  // .catch(function (error) {
  //   dbStatus = 'ERROR: Could not add ' + n + ' to DB.';
  //   console.log('ERROR:', error)
  //   res.json({ msg: 'Express backend connected. Server Time: ' + n , consoleMsg: 'Express connected. Request Time: ' + n, dbStatus: dbStatus });
  // })
});

app.get('*', (req, res) => {
  console.log('Path: ' + path.join(__dirname+'/client/build/index.html'));
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Express Backend listening on ${port}`);