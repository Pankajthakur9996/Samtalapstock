const nodemailer=require("nodemailer");
const randomString=require('randomstring')
const createModal=require('../models/create')
console.log("ENV Check:", process.env.SMTP_MAIL, process.env.SMTP_APP_PASS);

    
function genertateOtp()
{
    return randomString.generate(
        {
            length:6,
            charset:"numeric"
        }
    )
}

async function sendMail(email)
{
const otp1=genertateOtp()
    try{
        const transporter=nodemailer.createTransport({
            host:process.env.SMTP_HOST,
            port:process.env.SMTP_PORT,
            secure:true,
            
            auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_APP_PASS
          }

        })
        
        const data= await transporter.sendMail({
            from: `"Pankaj" <${process.env.SMTP_MAIL}>`,
            to:email,
           subject: `Login Code for Samtalapstock - ${new Date().toLocaleTimeString()}`,
            text: `Welcome to Samtalapstock`,
            html:`<h1> yor one time password valid for 1 minute ${otp1}</h1>`

        })
        console.log(data)
    
    }
    catch(error)
    {
        res.status(400).json(
            {
                message:error
            }
        )
    }
    return otp1
    
}


module.exports={sendMail};
