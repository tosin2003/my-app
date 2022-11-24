// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

  //db call
  // get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port:3306,
  database: 'assignment1'
});

// simple query
connection.query(
  'SELECT * FROM `users`',
  function(err, results, fields) {
    console.log(results); // fields contains extra meta data about results, if available
    res.status(200).json(results);
  });


}// function


