const mongoose=require('mongoose');
const otpSchema=mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String},

    otp:{type:String},
    createdAt:
    {
    type: Date,
  default: Date.now,
  expires: 60
    }

})
const otpmodal=mongoose.model('otpModal',otpSchema);
module.exports=otpmodal;