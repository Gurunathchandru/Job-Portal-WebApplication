const express = require('express')
const app = express()
app.get('/',(req,res) =>{
    res.status(200).send("Hai from Server")
})
const port = 3001;

app.listen(`${port}`,() =>{
    console.log(`the server is listening at port ${port}` )
})