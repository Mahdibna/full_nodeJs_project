const express=require("express")
const router=express.Router();
const Event=require('../models/event')
router.get('/', async (req, res) => {
    try {
        const events = await Event.find({});
        let chunk=[];
        for(i=0 ; i<events.length ; i+=3){
            chunk.push(events.slice(i , i+3));
        }
        res.render("../views/events/index.ejs",{
            chunk:chunk
        })
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});
router.get('/:id', async (req, res) => {
    try {
        const eventId = req.params.id;
        const element =  await Event.findById(eventId);

        if (element) {
         res.render("../views/events/show.ejs", {
                element: element
            });
        } else {
            res.status(404).send('Event not found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});
module.exports=router;