const nodemailer=require("nodemailer");
const randomString=require('randomstring')
const createModal=require('../models/create')
console.log("ENV Check:", process.env.SMTP_MAIL, process.env.SMTP_APP_PASS);
const otpBased=async(req,res)=>
{
    
function genertateOtp()
{
    return randomString.generate(
        {
            length:6,
            charset:"numeric"
        }
    )
}

async function sendMail()
{
const{email}=req.body
    try{
        const auth3=await createModal.findOne({email})
        console.log(auth3);
        if(!auth3)
        {
            res.json({
                message:"please enter valid email"
            })
        }
        
        const transporter=nodemailer.createTransport({
            host:process.env.SMTP_HOST,
            port:process.env.SMTP_PORT,
            secure:false,
            
            auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_APP_PASS
          }

        })
        const otp=genertateOtp()
        const data= await transporter.sendMail({
            from: `"Pankaj" <${process.env.SMTP_MAIL}>`,
            to:email,
            subject: "starting",
            text: `This is a test email from Node.js using nodemailer your otp is ${otp}`

        })
        console.log(" Email sent:", data.messageId);
        res.json({
            message:"email is a sent"
        })
    }
    catch(error)
    {
        res.status(200).json({
            message:`error:${error}`
        })
    }
}
sendMail();
}
module.exports=otpBased;
