const express = require('express');
const app = express()
const PORT = 3700;
const path = require('path');
const cors = require('cors');

app.use(cors());
app.use(express.static(path.join(__dirname, '../assets')));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '../index.html'))
});

app.listen(PORT, (err)=>{
    if(!err)
        console.log('Server is running on PORT:', PORT)
    else
    console.error('Error:', err)
})