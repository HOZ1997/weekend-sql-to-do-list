const express = require('express');
const taskRouter = express.Router();


// DB CONNECTION
const pool = require('../routes/pool');


// GET
taskRouter.get ('/',(req,res)=>{
  console.log ('in /tasks GET');
  const queryString = `SELECT * FROM tasks`;
 pool.query(queryString).then ((result)=>{
    res.send (result.rows); 
}).catch((err)=>{
    console.log (err);
    res.sendStatus(500); 
});
});

//POST
taskRouter.post('/', (req,res)=>{
    console.log ('in tasks POST', req.body);
    const queryString = `INSERT INTO tasks ( task, complete) VALUES ($1,$2);`;
    const values = [req.body.task, req.body.complete];
    pool.query( queryString, values).then((result)=>{
        res.sendStatus(201);//201 = created
    }).catch((err)=>{
        console.log(err);
        res.sendStatus(500);
    });
    });

module.exports = taskRouter; 