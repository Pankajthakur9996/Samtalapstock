const createModal=require('../models/create')
const otpmodal=require('../models/otpmodal')
const signin= async(req ,res)=>
{
    const data=req.body
  try{
    const email=data.email;
    const password=data.password;

        const auth3=await createModal.findOne({email})
        
        if(!auth3)
        {
            return  res.json({
                message:"invalid Caredentials"
            })
        }
        if(email &&password)
        {
        if(email==auth3.email&&password==auth3.password)
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
