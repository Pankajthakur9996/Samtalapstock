const mongoose=require('mongoose');
const otpSchema=mongoose.Schema({
    email:{type:String,required:true},
    otp:{type:String,required:true}

})
const otpmodal=mongoose.model('otpModal',otpSchema);
module.exports=otpmodal;