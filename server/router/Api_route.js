const express=require('express')
const Api_route=express.Router()
const Api_controller=require('../controller/Api_controller')


Api_route.post('/create/blog',Api_controller.createblog)
Api_route.get('/all/blogdata',Api_controller.AllBlogData)
Api_route.get('/blogdata/:id',Api_controller.singleblogdata)



module.exports=Api_route