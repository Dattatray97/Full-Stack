import express from 'express';
import cookieParser  from 'cookie-parser';
const app = express();
const port = 3001

app.use(cookieParser());
app.get('/',(req, res )=>{
    res.cookie('name','Express-app')
    res.send('Hello express')
})
app.get('/fetch',(req, res)=>{
    console.log(req.cookies);
    res.send("API Called")
})

app.listen(port, () => {
    console.log(`Server app listening at http://localhost:${port}`);
});