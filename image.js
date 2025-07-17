import express from 'express';
const app = express()
const port = 3001
app.use(express.static('public'))
app.use('/images' , express.static('images'))

app.get('/',(req, res)=>{
    res.send("Hello Express")

})
app.listen(port,()=>{
    console.log(`Example app listing on port http://localhost:${port}`)
})