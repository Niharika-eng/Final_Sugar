const mongoose=require("mongoose");
const { Schema } = mongoose;
const MenuSchema=new Schema({
   
            image:{
                type:String,
            },
            Caption:{
                type:String,
            }
  

})

const Info=mongoose.model("Info",MenuSchema);
module.exports={Info};