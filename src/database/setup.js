const mongoose = require('mongoose');

//const connectionString = 'mongodb://localhost:27017/dbclass'
const MONGO_URI = 'mongodb+srv://ebuka:ebukanathan@cluster0.nboky.mongodb.net/dbclass?retryWrites=true&w=majority'


module.exports = function(){
    mongoose.connect(MONGO_URI|| 'mongodb://localhost:27017/dbclass',{
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
}   
 
mongoose.connection.on('connected',()=>{
    console.log('mongoose is connected')
})