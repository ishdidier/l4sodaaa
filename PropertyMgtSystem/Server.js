const express = require('express');
const mysql = require('mysql2');
const port = 3000;

const App = express();
App.get('/',(req, res) =>{
    res.send('property mgt system')
})

App.listen(port, () =>{
    console.log('app is runing on: http://localhost:'+port)
})