//This is called Object Destructuring making attribute as variable and assigning the vaule of the attribute from the object.
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} =require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err){
    return console.log('Unable to connect to Database');
  }

  console.log('Connected to Mongo DB');

  // db.collection('Todos').insertOne({
  //   text:'To do something',
  //   completed:false
  // }, (err, result) =>{
  //   if (err){
  //     console.log('Unable to insert to Todos',err);
  //   }
  //
  //   console.log(JSON.stringify(result,undefined,2));
  // });

  // db.collection('Users').insertOne({
  //   name:"Mehabub",
  //   age:39,
  //   location:'Rochester'
  // }, (err,result) =>{
  //   if(err){
  //     console.log('Unable to insert to Users',err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // })
  db.close();
});
