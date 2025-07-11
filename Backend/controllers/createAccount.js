const createModal=require('../models/create')
const createAccount= async(req,res)=>
{
    const {firstName,lastName,email,password}=req.body;
    try{
        const auth1=await createModal.findOne({email});
        if(auth1)
        {
            res.status(200).json(
                {
                    message:"user already exist"
                }
            )
        }
        else
        {
            const addUser=new createModal({firstName,lastName,email,password});
            await addUser.save();
            res.status(200).json(
                {
                    message:"Account Created"
                }
            )
        }

    }
    catch(error)
    {
        res.status(400).json({
            message:error
        })

    }

}
module.exports=createAccount;