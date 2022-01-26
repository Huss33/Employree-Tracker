const express = require('express');
const mysql = require('mysql2');
// const api = require ('./routes/index.js');
const PORT = process.env.PORT || 3001;
const app = express();

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'root',
      database: 'owner_db'
    },
    console.log(`Connected to the movies_db database.`)
  );

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));