import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';

const app = express()
const port  = 3001;
app.use(cookieParser());

app.use(session({
    secret:'sample',
    resave: false,
    saveUninitialized:false
}))

app.get('/visite',(req,res)=>{
    if(req.session.page_views){
        req.session.page_views++;
        res.send(`You visited this page ${req.session.page_views} times`)
    }else{
        req.session.page_views =1;
        res.send("Welcome to page for the first time")
    }
})

app.get('/',(req,res)=>{
    res.cookie('name','Express-app',{maxAge : 360000})
    res.send('Hello express')
})


app.get('/remove-visite',(req, res)=>{
    req.session.destroy();
    res.send('Session removed')
})

app.listen(port, () => {
    console.log(`Server app listening at http://localhost:${port}`);
});