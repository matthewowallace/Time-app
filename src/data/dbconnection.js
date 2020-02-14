import express from './express';

var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createPool({
    connectionLimit: 50,
    host:'localhost',
    user: 'root',
    password: '',
    database: 'timeapp'
});

/* connection.connect((err) => {
    if(err){
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection established');
}); */

app.listen(3000)

/* app.get('/', function(req, resp){
    // about mysql
    connection.query("SELECT * FROM timeentry", function(error,rows,fields){
        if(!!error){
            console.log('Error in query');
        }else{
            console.log('Successful query');
            console.log(rows);
            //parse with your rows/fields
        }

    })
  
}) */


app.get('/', function(req, resp){
    // about mysql
    connection.getConnection(function(error, tempCont){
        if(!!error){
            tempCont.release();
            console.log('Error in query');
        }else{
            console.log('Successful query');
            tempCont.query("SELECT * FROM timeentry", function(error,rows,fields){
              tempCont.release();
              if(!!error){
                  console.log('Error in the query');
              } else{
                  resp.json(rows);
              }
            });
            //parse with your rows/fields
        }

    })
  
})

export default (
    express
)