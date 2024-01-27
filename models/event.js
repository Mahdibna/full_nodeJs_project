const mongoose=require('mongoose');
<<<<<<< HEAD
// this is the schema
//another  way to create a model in mongoose
=======
//message from github
>>>>>>> 6fe9a34413fbc50aab9dc27685dfb6fe0e8d3fff
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
