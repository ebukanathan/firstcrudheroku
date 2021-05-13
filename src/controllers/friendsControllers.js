const friends = require("../models/friends")
exports.creatFriends = function(req,res){
      
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
};

exports.fetchFriends = function(req,res){
    friends.find({},(err,data)=>{
        if(err){
            return res.status(500).json({err})
        }
        else{return res.status(200).json({data})

        }
    })
};


exports.updateFriends = function(req,res){
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
};




exports.deleteFriends = function(req,res){
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

}
