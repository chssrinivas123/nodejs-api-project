const mongoose=require('mongoose');

const studentSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
        
    }
})
module.exports=mongoose.model('Student',studentSchema)
