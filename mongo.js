const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://hewaihalages:tP2dqX2TFrZX464X@cluster0.zrm92p6.mongodb.net/wineDatabase")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const user = mongoose.model("user",newSchema)

module.exports=user