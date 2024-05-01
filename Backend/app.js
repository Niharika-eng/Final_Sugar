const express=require('express');
const app=express();
const mongoose=require('mongoose');
const {Info}=require('./models/info');
const cors=require('cors');
const path=require('path');

app.use(express.urlencoded({extended: true}));
app.use(cors({origin: '*' }));
app.use(express.json());

const MONGO_URL ="mongodb://127.0.0.1:27017/MenuData";

async function main(){
    await mongoose.connect(MONGO_URL);
}

main().then(()=>{console.log("connected to DB");})
       .catch((err)=>{console.log(err);})

app.get("/menu",async(req,res)=>{
    Info.find()
    .then(users=>{
        console.log(users);
        res.json(users);
    })
    .catch(err=>res.json(err));
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
