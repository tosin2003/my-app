export default function handler(req, res) {

    console.log("login api page called...");
   
    console.log("looking at the variables we got from the browser..");
    console.log(req.body);
  
    // Get just the username and password and put them into variables.
    const username = req.body.username;
    const pass = req.body.password;
    const email = req.body.email;
    const address = req.body.address;
    
    console.log("username is: "+ username);
    console.log("password  is: "+ pass);
    console.log("address is " + address);
    console.log("email is " + email);
  
    // db
    // get the client
    const mysql = require('mysql2');
  
    // create the connection to database
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      port: 3306,
      database: 'assignment1'
    });
  
  
    // simple query
  connection.query(
    "INSERT INTO `assignment1`.`users` (`username`, `pass`, `email`, `address`, `acctype`) VALUES ('"+username+"', '"+pass+"', '"+email+"', '"+address+"', 'yyy');",
    function(err, results, fields) {

      console.log(results); // results contains rows returned by server
      
      res.status(200).json("ok");



    }
  );

}
      