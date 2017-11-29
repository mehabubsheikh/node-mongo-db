//This is called Object Destructuring making attribute as variable and assigning the vaule of the attribute from the object.
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} =require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err){
    return console.log('Unable to connect to Database');
  }

  console.log('Connected to Mongo DB');

 db.collection('Todos').findOneAndUpdate({
   _id: new ObjectID("5a1e02fe9265ba16045e61e5")
 },{
   $set: {
     completed: true
   }
   },{
     returnOriginal:false
   }
 ).then((result) =>{
   console.log(result);
 });
  //db.close();
});
