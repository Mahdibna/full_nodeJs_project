const mongoose = require('mongoose')
const db=mongoose.connect('mongodb+srv://mahdi:Mahdi1472003@mahdicluster.ieoi2en.mongodb.net/',{ useNewUrlParser: true }).then(()=>{
    console.log('connnected to database')
}).catch((err)=>{console.log('error')})