const express = require('express')
const cors = require('cors')

const app = express();
app.use(cors('*'))  // Accepts all the requests from different port number
app.use(express.json()); // It's a middleware parses the json incoming requests from frontend and converts js

app.get('/',(req,res)=>{
    res.json("Hello")
})

module.exports = app;