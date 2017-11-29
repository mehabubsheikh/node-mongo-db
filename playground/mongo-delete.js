//This is called Object Destructuring making attribute as variable and assigning the vaule of the attribute from the object.
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} =require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err){
    return console.log('Unable to connect to Database');
  }

  console.log('Connected to Mongo DB');

 // db.collection('Todos').deleteMany({text:'To do something'}).then((results) =>{
 //   console.log(results);
 // }, (err) =>{
 //   console.log('Unable to delete',err);
 // });

 // db.collection('Todos').deleteOne({text:'To do eat lunch'}).then((results) =>{
 //   console.log(results);
 // }, (err) =>{
 //   console.log('Unable to delete',err);
 // });

 db.collection('Todos').findOneAndDelete({text:'To do eat lunch'}).then((results) =>{
   console.log(results);
 }, (err) =>{
   console.log('Unable to delete',err);
 });
  //db.close();
});
