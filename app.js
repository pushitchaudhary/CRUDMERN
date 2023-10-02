const express = require('express')
const app = express()
const { DatabaseConnection } = require('./database/database')
const Blog = require('./module/blogModule')
const router = require('./router/blogRouter')

DatabaseConnection()

// app.set('view engine','ejs')

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
        const description = req.body.description
    
        await Blog.create({
            title:title,
            subTitle:subTitle,
            description:description
        })
        res.redirect('/')
})




app.use('',router)

app.listen(2000,()=>{
    console.log("Node has started at 2000")
})