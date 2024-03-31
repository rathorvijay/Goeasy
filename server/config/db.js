const mongoose=require("mongoose");

const dbconnection=async ()=>{
    await mongoose.connect(process.env.DB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("db connection successfully");
    }).catch((error)=>{
        console.log("db connection fail",error);
        process.exit(1);
    })
}

module.exports=dbconnection;