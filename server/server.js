const express = require('express');
const cors = require('cors')
const app = express();
const bodyParser = require("body-parser")
const port = 8000;

app.use(bodyParser.json())
app.use(bodyParser.text())

let users = ["userOne","userTwo","userThree"]

app.use(cors({
    origin: 'http://localhost:3000' 
}));

app.get('/api',(req,res)=>{
    res.json({
        users:users
    })
    
})
app.post('/post',(req,res)=>{
    const coming = req.body
    users.push(coming)
    res.json({
        message:"pushed"
    })

})

app.listen(port,()=>{
    console.log("Server is online at localhost:"+port)
})