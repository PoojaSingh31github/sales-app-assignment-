const mongoose=require('mongoose');
const salesSchema=new mongoose.Schema({
    product:{
        type:String,
        require:true
    },
    quantity:{
        type:Number,
        require:true
    },
    amount:{
        type:Number,
        require:true
    }
    
}, {timestamps:true});

const salesModel = mongoose.model("SalesModel", salesSchema)
module.exports=salesModel;