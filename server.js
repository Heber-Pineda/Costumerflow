const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/appo-medk'))
app.get('/*',(req,res)=>{
    res.sendFile('index.html',{root:'dist/appo-medk/'})
})

app.listen(process.env.PORT || 8080);