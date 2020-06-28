function send_data(){
var express = require('express');
let mysql = require('mysql');
var app = express();
var username = $_POST['username'];
var email = $_POST['email'];
var pass = $_POST['password'];
var phone = $_POST['contact_number'];

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'empire',
    database: 'good_health'
});


app.get('/',(req, res) => {
  connection.connect(function(err) {
  if(err) throw err;
      else {
          connection.query("SELECT * FROM User",(err, result) => {
              if(err) {
                  console.log(err); 
                  res.json({"error":true});
              }
              else { 
                  console.log(result); 
                  res.json(result); 
              }
          });
      }
  });
});
}