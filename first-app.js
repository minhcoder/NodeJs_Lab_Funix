const express = require('express')
const app = express();
const bodyParser= require('body-parser')
const adminRouters= require('./routes/admin')
const shopRouters= require('./routes/shop')

app.use(bodyParser.urlencoded())

app.use(adminRouters);
app.use(shopRouters)



app.listen(3000)