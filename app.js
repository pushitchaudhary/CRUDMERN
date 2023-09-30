const express = require('express');
const { ConnectionDatabase } = require('./database/database');
const app = express();

ConnectionDatabase();

// GET API -> /
app.get('/',(req,res)=>{
    res.json({
        status:200,
        message:"Success"
    })
})


app.listen(2000,()=>{
    console.log("node has started at 2000")
})