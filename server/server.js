const express=require('express')
const mongoose=require('mongoose')
const body_parser=require('body-parser')
const cors=require('cors')
const app=express()


app.use(express.urlencoded({extended:true}))
app.use(body_parser.json())
app.use(body_parser.urlencoded({extended:true}))
app.use(cors())


const Route=require('./router/Api_route')
app.use(Route)


const db="mongodb+srv://sayandeepdey:sdcQ7VK6lCG2ksAa@cluster0.pbv3qup.mongodb.net/Blog_project"
const port=1111
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true})
.then(res=>{
    app.listen(port,()=>{
        console.log(`Api Running at http://localhost:${port}`);
    })
}).catch(err=>{
    console.log(err);
})