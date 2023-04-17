import express from 'express'

const app = express()

app.get('/books',(req,res)=>{
    res.send('Books all')
})

app.listen(4000)

