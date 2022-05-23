const express = require('express');
const taskRouter = express.Router();


// DB CONNECTION
const pool = require('../routes/pool');


// GET
taskRouter.get ('/',(req,res)=>{
  console.log ('/tasks GET');
  const queryString = `SELECT * FROM tasks`;
 pool.query(queryString).then ((result)=>{
    res.send (result.rows); 
}).catch((err)=>{
    console.log (err);
    res.sendStatus(500); 
});
});

//DELETE
taskRouter.delete ('/',( req,res)=>{
    console.log( '/tasks DELETE', req.query );
    //- DELETE FROM tasks WHERE id=1 ->req.query.id
     let queryString = `DELETE FROM tasks WHERE id=$1`;
     let values = [ req.query.id ];
     pool.query( queryString, values ).then( ( results )=>{
        res.sendStatus ( 200 );
    }).catch( ( err )=>{
        console.log( err );
        res.sendStatus( 500 );
    })
})


//POST
taskRouter.post('/', (req,res)=>{
    console.log ('in /tasks POST:',req.body);
    let queryString = `INSERT INTO tasks ( task, complete) VALUES ($1,$2);`;
    let values = [req.body.task, req.body.complete];
    pool.query( queryString, values).then((results)=>{
        res.sendStatus(200);//201 = created
    }).catch((err)=>{
        console.log(err);
        res.sendStatus(500);
    });
    });


//PUT
taskRouter.put( '/', ( req, res )=>{
         console.log( 'in /tasks PUT:', req.query );
   let queryString = `UPDATE tasks SET complete=true WHERE id=$1;`;
     let values = [ req.query.id ];
     pool.query( queryString, values ).then(( results )=>{
         res.sendStatus( 200 );
     }).catch( (err)=>{
         console.log( err );
         res.sendStatus( 500 );
     });
    });


module.exports = taskRouter;