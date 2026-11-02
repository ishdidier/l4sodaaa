const express = require('express');
const mysql = require('mysql2');
const app =express();
require('dotenv').config();
const port =process.env.PORT || 3000;

const db = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'PF minuza',
        database:'pms'
    }
);

db.connect((err) =>{
    if (err){
        console.log('error in connection',err)
    }
    else{
console.log('connected successfully')
    }
    
})
 

app.listen(port, () =>{
    console.log("app is running on: http://localhost:"+port)
})