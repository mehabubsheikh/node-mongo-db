const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var eventSchema = new Schema({
  name:{
    type:String
  },
  organizer:{
    type: String,
    requird: true,
    trim:true,
    minlength:1,
    maxlength:240
  },
  eventType:{
    type:String,
    required:true,
    minlength:1,
    maxlength:240,
    trim:true
  },
  eventStartDate:{
    type: Date,
    required:true
  },
  eventEndDate:{
    type:Date,
    required:true
  },
  location:String,
  rehearsalNeeded:String,
  eventYear:{
    type:String,
    default: new Date().getFullYear()
  }
});

var OrgEvent = mongoose.model('OrgEvent',eventSchema);

module.exports = {OrgEvent};
