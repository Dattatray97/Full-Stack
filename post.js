import express from 'express';
const app = express();
const port = 3001;
app.use(express.json())
app.get('/',(req, res)=>{
    res.send('Hello Express')
})

app.get('/message', (req, res) => {
  res.send('You are in get');
})

 app.post('/message',(req,res)=>{
    const name = req.body.name;
    res.send(`Upadte name is ${name}`);
 })

 app.delete('/message',(req,res)=>{
    res.send(`Your name is delete`)
 })

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
