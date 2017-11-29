const mongoose =require('mongoose');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp',{useMongoClient:true});

//Normal
// module.exports ={
//   mongoose: mongoose
// };

//ES6
module.exports ={
  mongoose
};
