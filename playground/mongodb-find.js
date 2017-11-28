//This is called Object Destructuring making attribute as variable and assigning the vaule of the attribute from the object.
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} =require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err){
    return console.log('Unable to connect to Database');
  }

  console.log('Connected to Mongo DB');

  // db.collection('Todos').find({completed:false}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // }, (err) => {
  //   //console.log('Unable to fetch Todos',err);
  //   console.log('Connected to Mongo DB',err);
  // });

  //query by _id vaule
  // db.collection('Todos').find({_id:new ObjectID('5a1dc6dae2055c3ee8a87605')}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // }, (err) => {
  //   //console.log('Unable to fetch Todos',err);
  //   console.log('Connected to Mongo DB',err);
  // });

  //Count
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count ${count}`);
  //
  // }, (err) => {
  //   //console.log('Unable to fetch Todos',err);
  //   console.log('Connected to Mongo DB',err);
  // });

  db.collection('Users').find({name:'Mehabub'}).toArray().then((docs) =>{
    console.log('Users');
    console.log(JSON.stringify(docs,undefined,2));
  },(err) =>{
    console.log('Unable to query users and error is',err);
  });

  db.collection('Users').count({name:'Somnath'}).then((count) =>{
    console.log(`User count : ${count}`);
  },(err) => {
    console.log('Unable to count users',err);
  });

  //db.close();
});
