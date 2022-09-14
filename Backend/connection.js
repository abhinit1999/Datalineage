const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();

const connection=mongoose.connect(
    process.env.DB_CONNECT,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
      },
      ()=>console.log("connected to db")
);
module.exports=connection;