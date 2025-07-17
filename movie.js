import express from 'express';
const app = express();
const port = 3000;

app.set('view engine','ejs')
app.use(express.static('public'))

const = [
    {}
]


app.get('/',(req,res)=>{
    res.render('movies',{title:})
})