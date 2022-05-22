const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5001;
const taskRouter = require('./routes/task.router')

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));


//ROUTES
app.use ('/tasks', taskRouter)

//Start listening for requests on port

app.listen(PORT, () => {
    console.log('listening on port', PORT);
  });