const db=require('../config/database');
const Event=require('../models/event');
let newEvent=new Event({
    title:'New Year',
    description:'this is the best event in the world',
    location:'oman',
    date:Date.now()
})
newEvent.save()
  .then(() => {
    console.log('Data saved');
  })
  .catch((error) => {
    console.log(error);
  });