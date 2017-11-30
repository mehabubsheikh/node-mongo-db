//Seeded require
const _ =require('lodash');
const express =require('express');
const bodyParser = require('body-parser');
//Custom require
var {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {User} = require('./model/user');
var {Todo} =require('./model/todos');
var {Member} =require('./model/member');
var{OrgEvent} = require('./model/events');
// For Heroku Port Capturing. As ports are stored in in Process in PORT env variable
var port = process.env.PORT||3000;
//Creating Express Application
var app =express();
//Parse the Request Body
app.use(bodyParser.json());

// var newMember = new Member({
//   name: ({
//     title:'Mrs',
//     firstName:'Payel',
//     lastName:'Sheikh'
//   }
//   ),
//   phoneNumber:'+1(585)-622-8907',
//   emailAddress:'mehabub.sheikh@icloud.com',
//   address:({ addressLine1:'6 Colonial Parkway',
//   addressLine2:'Apartment #1',
//   city:'Pittsford',
//   state:'NY',
//   zip:'14534'})}
// );

//Save the Member to database
// newMember.save().then((mem) =>{
//   console.log('Member Saved',mem);
// }).catch((error) => {
//   console.log('Unable to save the member to database',error);
// });

//GET member API

app.get('/member',(req,res) =>{
  Member.find().then((members) =>{
    res.send({members});
  },(error)=>{
    res.status(400).send(error);
  });
});

//Event Data Start Here

// var newEvent = new OrgEvent({
//   name:'Test Event1',
//   organizer:'Mehabub',
//   eventType:'Cultural',
//   eventStartDate: new Date('11.30.2017'),
//   eventEndDate: new Date('12.04.2017'),
//   location:'ICC',
//   rehearsalNeeded:'Yes'
// });

// newEvent.save().then((events) =>{
//   console.log('Event Saved',events);
// }).catch((error) =>{
//   console.log('Unable to save the events to database',error);
// });

//GET evets API
app.get('/event',(req,res) =>{
  OrgEvent.find().then((events) =>{
    res.send({events});
  },(error)=>{
    res.status(400).send(error);
  });
});

//POST API
app.post('/event',(req,res) =>{
  var newEvent = new OrgEvent({
    name:req.body.name,
    organizer:req.body.organizer,
    eventType:req.body.eventType,
    eventStartDate: req.body.eventStartDate,
    eventEndDate: req.body.eventEndDate,
    location:req.body.location,
    rehearsalNeeded:req.body.rehearsalNeeded
  });
  newEvent.save().then((event) =>{
    res.send({event});
  },(error)=>{
    res.status(400).send(error);
  });
});

//GET Specific Event by ID
app.get('/event/:id', (req,res) =>{
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
    console.log('Invalid ObjectID');
    return res.status(404).send();
  }
  OrgEvent.findById(id).then((event) =>{
    if(!event){
      return res.status(404).send();
    };
    res.send({event});
  },(error) =>{
    res.status(400).send();
  });
});

//Delete
app.delete('/event/:id',(req,res) =>{
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  OrgEvent.findByIdAndRemove(id).then((event) =>{
    if (!event) {
      return res.status(404).send();
    }
    res.send({event,status:'Deleted'});
  }).catch((e) => {
    return res.status(400).send();
  });
});

//Update
app.patch('/todos/:id',(req,res) =>{
  var id = req.params.id;
  var body = _.pick(req.body,['text','completed']);

  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  if(_.isBoolean(body.completed) && body.completed){
    body.completedAt = new Date().getTime();
  } else {
    body.completed =false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set:body},{new:true}).then((todo) =>{
    if(!todo){
      return res.status(404).send();
    }

    res.send({todo})
  }).catch((e) =>{
    return res.status(400).send();
  });
});

app.listen(port,() => {
  console.log(`Server is up and running on ${port}`);
});

module.exports ={app};
