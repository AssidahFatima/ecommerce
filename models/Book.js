const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const BookSchema=new Schema({

    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    dateCreation:{
        type:Date,
        default:Date.now
    }
});

module.exports=Book=mongoose.model('book',BookSchema);