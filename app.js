const express=require("express")
const app=express();
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.static('node_modules'))
const router=require("./routes/event-routes");
app.use(express.static('public'))
app.use('/events',router);
app.listen(3000 ,(err , res)=>{
    !err ?console.log("server is running"):res.send(err);
})