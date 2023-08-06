const mongoose=require('mongoose')

const BlogSchema=mongoose.Schema({
    Title:{
        type:String,
        required:[true,'Please add a Title']
    },
    Content:{
        type:String,
        require:[true,"Please Add content"]
    },
    Author:{
        type: String,
        require:true
    },
    // Image:{
    //     data:Buffer,
    //     // contentType:'image/png',
    //     require:false
    // }
})


module.exports=mongoose.model('Blog',BlogSchema)