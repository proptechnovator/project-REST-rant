const express= require('express')
const app = express()

require('dotenv').config()

app.get('/',(req,res)=>{
    res.send('Hello My Fellow FSDs')
})
app.get('*',(req,res)=>{
    res.status(404).send(`<h1>404 Page not found</h1>`)

})

app.listen(process.env.PORT)