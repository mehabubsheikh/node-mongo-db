const express =require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');

var {User} = require('./model/user');
var {Todo} =require('./model/todos');
var port = 3000;
var app =express();

app.use(bodyParser.json());
app.post('/todos',(req,res) =>{
  var todo = new Todo({
    text: req.body.text
  }
  );

  todo.save().then((doc) =>{
    res.send(doc);
  },(error) => {
    //console.log('Unable to create todo',error);
    res.status(400).send(error);
  });
});

app.listen(3000,() => {
  console.log(`Server is up and running on ${port}`);
})
