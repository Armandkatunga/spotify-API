const express = require('express')
const app = express()


app.get('/',(req,res)=>{

    res.send('we move')
})


const port = 3000

app.listen(port,console.log(`the app is listening on port ${port}`))