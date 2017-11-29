const express =require('express');
const bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');

var {User} = require('./model/user');
var {Todo} =require('./model/todos');
var port = process.env.PORT||3000;
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

app.get('/todos',(req,res) =>{
  Todo.find().then((todos) =>{
    res.send({todos});
  },(error)=>{
    res.status(400).send(error);

  });
});

app.get('/todos/:id', (req,res) =>{
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    console.log('Invalid ObjectID');
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) =>{
    if(!todo){
      return res.status(404).send();
    };

    res.send({todo});

  },(error) =>{
    res.status(400).send();
  });


});

app.listen(port,() => {
  console.log(`Server is up and running on ${port}`);
});

module.exports ={app};
