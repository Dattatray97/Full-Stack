import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
const app = express();
const port = 3001;
app.use(cookieParser());

const users = [];
app.use(express.json())
app.use(cookieParser());
app.use(session({
    secret: 'sample',
    resave: false,
    saveUninitialized:false
}))
app.post('/register',(req,res)=>{
    const {username, password} = req.body;
    users.push({
    username,
    password
    })
    res.send('User registerd')

})

app.post('/login', (req,res)=>{
    const {username, password } = req.body;
    const user = users.find(u=>u.username === username)
    if(!user||password !== user.password){
        return res.send("Not authorized")
    }
    req.session.user =user ;
    res.send('User Logged in');
})
app.get('/dashboard', (req,res)=>{
    if(!req.session.user){
        return res.send("Unauthorized")
    }
    res.send(`Welcome , ${req.session.user.username}`)
})
app.listen(port, () => {
    console.log(`Server app listening at http://localhost:${port}`);
});