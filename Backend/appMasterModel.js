const mongoose=require("mongoose");
const schema=mongoose.Schema(
    {
        Internal_Purchased:'String',
    Portfolio:'String',
    SubApplication_Area:'String',
    Application_Acronym:'String',
    Application_Name:'String',
    Notes:'String',
    },
    {timestamps: true}
)
const AppMaster=mongoose.model('appMaster',schema);
module.exports=AppMaster;