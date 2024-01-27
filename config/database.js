const mongoose = require('mongoose')
const db=mongoose.connect('mongodb+srv://mahdi:oPSDVjq3v3m5881n@mahdicluster.ieoi2en.mongodb.net/',{ useNewUrlParser: true }).then(()=>{
    console.log('connnected to database')
}).catch((err)=>{console.log('error')})