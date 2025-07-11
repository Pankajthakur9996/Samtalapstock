const mongoose=require('mongoose');
const CreateSchema=mongoose.Schema(
    {
        firstName:{ type:String,
            required:true
        },
        lastName:
        {
            type:String,
            required:true

        },
        email:{
            type:String,
            required:true


        },
        password:
        {
            type:String,
            required:true

        }
    }
)
const createModal=mongoose.model('create',CreateSchema);
module.exports=createModal;
