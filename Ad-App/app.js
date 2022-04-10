const express = require("express");
const app = express();
const advertisementModal=require('./advertisement.model.js');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors')
mongoose.Promise=global.Promise;
const db={};
db.mongoose=mongoose;
db.advertisement=advertisementModal;
const dotenv= require("dotenv");
dotenv.config();
const Advertisement=db.advertisement



db.mongoose.connect(process.env.link
).then(()=>{
    console.log(`successfuly connected to DB`)
}).catch((err)=>{
    console.log(`Connection error : ${err}`)
    process.exit()
})


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

app.post('/api/create',(req,res)=>{
    console.log(req.body);
    const _ad = new Advertisement({
        name:req.body.name,
        description:req.body.description,
        image_url:req.body.imageUrl,
        price:req.body.price,
        username:req.body.username,
        phone:req.body.phone
    })
    _ad.save((err,product)=>{
       if(err){
        res.status(500).send({message:err})
        return
       }
        res.status(200).send({message:"Your product is advertised successfully!"});
    })

})
app.delete('/api/delete/:adId',(req,res)=>{
    const adId=req.params.adId;
    Advertisement.findByIdAndRemove({_id:adId})
    .exec((err,ads)=>{
        if(err){
            res.status(500).send({message:err});
            return;
        }
        res.status(200).send({message:"Advertisement removed successfully!"});
    })
})
app.get('/api/get-ads/all',(req,res)=>{
    Advertisement.find({})
    .exec((err,ads)=>{
        if(err){
            res.status(500).send({message:err});
            return;
        }
        res.status(200).send({adsData:ads});
    })
})


app.use(express.static("public"));




app.listen(process.env.PORT || 8084, ()=>console.log("Listening on 8084"));
