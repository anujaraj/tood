const express = require('express');
const mysql = require('mysql');
const router = express.Router();


const conn = getConnection()

function getConnection(){
     return mysql.createConnection({
          host: "localhost",
          port: "8000",
          user: "root",
          password: "",
          database: "todo"
     })
}
router.get('/',(req,res)=>{
     res.render('index.');
})
router.get('/',(req,res)=>{
     const querryString = "SELECT * FROM todos WHERE complete = '0'"
     conn.query(queryString,(err,rows,fields)=>{
          if(err){
               console.log("failed" + err)

     
          }
          console.log("getting data ")
          res.json(rows)
     })
})

router.post('/add_todo',(req,res)=>{
     const todo = req.body.add_todo_input
     const querryString = "INSERT INTO todos (todo) VALUES (?)"
     conn.query(queryString,(err,rows,fields)=>{
          if(err){
               console.log("failed" + err)

     
          }
          console.log("getting data ")
          res.json(rows)
     })
})

module.exports = router