const BlogSchema=require('../model/Blog_model')



const createblog=async(req,res)=>{
    const blog=await new BlogSchema({
        Title:req.body.Title,
        Content:req.body.Content,
        Author:req.body.Author
    })
    const Blogdata=await blog.save().then(data=>{
        return res.status(200).json({success:true,data:data,message:'Blog Uploaded Successfully'});
    }).catch(error=>{
        return res.status(400).json({success:false,message:'Couldnt Upload Blog....'})
    })
}

const AllBlogData=async(req,res)=>{
    const Alldata= BlogSchema.find().then(result=>{
       return res.status(200).json({success:true,data:result,message:'All Blog fetched'})
    }).catch(error=>{
        return res.status(400).json({success:false,error:error,message:'Couldnt get Data'})
    })
}

const singleblogdata=async(req,res)=>{
    const _id=req.params.id
    const single=BlogSchema.findById(_id)
    .then(result=>{
        return res.status(200).json({success:true,data:result,message:'Single Blog fetched'})
    }).catch(error=>{
        return res.status(400).json({success:false,error:error,message:'Couldnt get Data'})
    })
}
module.exports={createblog,AllBlogData,singleblogdata}