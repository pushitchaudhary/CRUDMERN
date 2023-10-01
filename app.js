const express = require('express')
const app = express()
const { DatabaseConnection } = require('./database/database')
const Blog = require('./module/blogModule')
const routes = require('./routes/blogRoutes');


DatabaseConnection()

app.use(express.json())
app.use(express.urlencoded({extended:true}))




app.get('/',(req,res)=>{
    res.json({
        status: 200,
        message: "Successfully"
    })
})




app.post('/createBlog', async (req,res)=>{
    const title = req.body.title;
    const subTitle = req.body.subtitle;
    const description = req.body.description;
    
    const blog = await Blog.create({
        title:title,
        subTitle:subTitle,
        description:description
    })
    res.send("success")
})

app.use('',routes)


app.listen(2000,()=>{
    console.log("Node has started at 2000")
})