const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/model/todos');


var id ='5a1e109902d89403880445e77';

if(!ObjectID.isValid(id)){
  console.log('Object id is not valid');
}

// Todo.find({
//   _id:id
// }).then((todos) =>{
//   console.log('Todos:',todos);
// });
//
// Todo.findOne({
//   _id:id
// }).then((todo) =>{
//   console.log('Todo:',todo);
// });

Todo.findById(id).then((todo) =>{
if(!todo){
  return console.log('Id could not be found');
}
  console.log('Tdo bu id',todo);
}).catch((e) =>{
  console.log(e);
});
