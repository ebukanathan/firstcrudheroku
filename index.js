const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config;

app.use(bodyParser.json())

const connectionString = 'mongodb+srv://ebuka:ebukanathan@cluster0.nboky.mongodb.net/dbclass?retryWrites=true&w=majority'

mongoose.connect(connectionString,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:true
}, (err)=>{
    if(err) {
        console.log(err)
    }else{
        console.log('database connected successfully')
    }
})



//create Schema
const personalInfoSchema = new mongoose.Schema({
    name:String,
    email:String,
    country:String
})  


const friends = mongoose.model('friends',personalInfoSchema)
//post request to /  to create a new json

app.post('/info',(req,res)=>{
    
    
    friends.create({
        name:req.body.name,
        email:req.body.email,
        country:req.body.country
    }, (err,data)=>{
        if(err){
            return res.status(500).json({message:err})
        }else{return res.status(200).json({message:'new data created'. data})

        }
    })
})
//get request to / to get files
app.get('/info',(req,res)=>{
    friends.find({},(err,data)=>{
        if(err){
            return res.status(500).json({err})
        }
        else{return res.status(200).json({data})

        }
    })
})

//put request to /..:id to update
app.put('/info/:id',(req,res)=>{
    friends.findByIdAndUpdate(req.params.id, {
        name:req.body.name,
        email:req.body.email

    }, (err,data)=>{
        if(err){return res.status(500).json({message:err})}
        else if(!data){return res.status(404).json({message:"details not found"})}
        else{data.save((err,saved)=>{
            if(err){return res.status(400).json({message:err})
            }else{return res.status(200).json({message:"updated successfully"})}
        })
    }
    }) 
})
//delete request 

app.delete('/info/:id',(req,res)=>{
    friends.findByIdAndDelete(req.params.id,(err,data)=>{
        if (err){
            return res.status(500).json({message:err})
        }else if(!data){
            return res.status(404).json({message:'no details was found'})
        }
        else{
            return res.status(200).json({message:"data deleted successfully"})
        }
    })

})

const port = process.env.PORT ||3000
app.listen(4000)