const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var memberSchema = new Schema({
    name:{
      title:{
      type:String
            },
    firstName:{
      type: String,
      required:true,
      maxlength: 240,
      trim:true
                  },
    lastName:{
      type: String,
      required:true,
      maxlength: 240
  }
  },
    phoneNumber:{
      type: String,
      required:true
    },
    emailAddress:{
      type: String,
      required:true
    },
      address:{
        addressLine1:{type:String,required:true,trim:true,minlength:1,maxlength:240},
      addressLine2:String,
      city: String,
      state: {type:String,required:true,trim:true,minlength:2},
      zip:{type:String,required:true,trim:true}
    }
});

var Member = mongoose.model('Member',memberSchema);

module.exports = {Member};
