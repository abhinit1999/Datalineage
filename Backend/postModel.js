const mongoose=require("mongoose");
const schema=mongoose.Schema(
    {title:'String',
    content:'String'
    },
    {timestamps: true}
)
const Post=mongoose.model('post',schema);
module.exports=Post;