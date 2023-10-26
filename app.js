const express = require('express')
const app = express()

// Get API
app.get('/',(req,res)=>{
    res.json({
        status:200,
        message:'Success'
    })
})


app.listen(4000,()=>{
    console.log('Node js has started at 4000')
})