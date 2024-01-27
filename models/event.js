const mongoose=require('mongoose');
//another  another branch
var Schema=new mongoose.Schema(
    {
        title : {
            type:String,
            required:true
        },
        description: {
            type:String,
            required:true
        },
        location: {
            type:String,
            required:true
        },
        date: {
            type:Date,
            required:true
        },
    }
)
let Event=mongoose.model('Event', Schema);
module.exports=Event;
