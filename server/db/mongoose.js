const mongoose =require('mongoose');


mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost:27017/TodoApp',{useMongoClient:true});

//Normal
// module.exports ={
//   mongoose: mongoose
// };

//ES6
module.exports ={
  mongoose
};
