const mongoose=require("mongoose");
const schema=mongoose.Schema(
    {
            App1:'String',
    App2:'String',
    Direction:'String',
    Typeofdata_involved:'String',
    Notes:'String',
    },
    // {timestamps: true}
)
const IntegrationMaster= new mongoose.model('integration',schema);
module.exports=IntegrationMaster;