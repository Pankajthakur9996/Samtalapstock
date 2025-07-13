const createModal=require('../models/create')
const otpmodal=require('../models/otpmodal')
const signin= async(req ,res)=>
{
    const data=req.body
  try{
    const email=data.email;

        const auth3=await createModal.find({email})
        
        if(!auth3)
        {
            return  res.json({
                message:"invalid email"
            })
        }
        if(data.email &&data.password)
        {
        if(data.email==auth3.email&&data.password==auth3.password)
        {
            res.status(200).json(
                {
                    message:"login successfull"
                }
            )
        }
        else
        {
            res.status(200).json(
                {
                    message:"invalid cardentials"
                }
            )
        }
    }
    else{
        const email=data.email;
        const otp=data.otp
    
        const auth4= await otpmodal.findOne({email,otp});
    
        if(!auth4)
        {
            res.status(200).json(
                {
                 message:"invalid otp" 
                }
            )
        }
        else 
        {
            res.status(200).json(
                {
                    message:"login"
                }
            )

        }

        

    }
        

        
        
    }

    
    catch(error)
    {
        res.status(200).json({
            message:'inavalid cardentials'
        })
    }

}
module.exports=signin;
