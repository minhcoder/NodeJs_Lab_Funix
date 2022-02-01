const http = require('http')
const express = require('express')
const app = express();

app.use((req,res,next)=>{
    console.log('In the Middleware')
    // res.send('<h1>My name is Minh</h1>')
    next()
}) 
app.use((req,res,next)=>{
    res.send('<h1>Hello from NodeJs</h1>')
})

const server = http.createServer(app)
server.listen(3000)