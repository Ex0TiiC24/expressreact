const express = require('express')
const app = express()
const port = 8000

app.get('/api',(req,res)=>{
    res.json({
        users:["userOne","userTwo","userThree"]
    })
})

app.listen(port,(req,res)=>{
    console.log("Server is online at localhost:"+port)
})