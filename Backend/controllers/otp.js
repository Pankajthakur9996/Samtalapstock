const {sendMail}=require('../utils/email');
const createModal=require('../models/create')
const otpmodal=require('../models/otpmodal')
const otpButton= async(req,res)=>
{

const{email}=req.body;
try{
    const auth4=await createModal.find({email})
            console.log(auth4);
            if(!auth4)
            {
                return  res.json({
                    message:"invalid email"
                })
            }
    
 const otp=await sendMail(email)
 const otpAuth=new otpmodal({email,otp})
 await otpAuth.save();
res.status(200).json(
    {
        message:`otp is sent:${otp}`
    }
)
}
catch(error)
{
    res.status(400).json(
        {
            message:error
        }
    )
}

}
module.exports=otpButton;
