const express = require("express"); 
const app = express(); 

app.listen(4000, () => {
    console.log('server started...')
})

app.get('/', (req, res) =>{
    res.send("hello world"); 
})