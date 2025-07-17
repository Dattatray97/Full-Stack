import express from 'express';
const app = express();
const port = 3001

app.set('view engine','ejs');
app.use(express.static('public'));
app.get('/', (req, res) =>{
    res.render('handling',{});

})
app.use(express.urlencoded({extended:true}

))
app.post('/form',(req,res)=>
    {
    console.log(req.body)
    res.send('From Recived')
})
app.listen(port, ()=> {
    console.log(`Example of server port${port}`)
})