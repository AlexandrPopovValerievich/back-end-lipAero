import { server } from "./index.js"

const app = server()

app.get('/books',(req,res)=>{
    res.end('Books all')
})

app.get('/users',(req,res)=>{
    res.end('Users all')
})

app.listen(4000)