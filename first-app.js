const express = require('express')
const app = express();

// luôn luôn chạy
app.use('/',(req,res,next)=>{
    console.log('This Middleware always run')
    next()
})

app.use('/add-product',(req,res,next)=>{
    res.send('<h1>The "Add Product" Page</h1>')
})
app.use('/',(req,res,next)=>{
    res.send('<h1>Hello from NodeJs</h1>')
})

app.listen(3000)