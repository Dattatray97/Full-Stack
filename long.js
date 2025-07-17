import express from 'express';

const app = express();
const port =3000;

app.use(express.json());
let user = [
    {id: 1, name: 'Datta', email:'datta@gmail.com'},
    {id: 2, name: 'omi', email:'omi@gmail.com'}
];
app.get('/user', (req,res)=>{
    res.send(user);

});
app.post('/user', (req,res)=>{
    res.send(user)
});
app.get('/user',(req,res)=>{
    const {name, email } = req.body;
    const newUser = {
        id: user.length + 1,
        nameemail
    };
    user.push(newUser);
    res.status(201).send(`User added: ${JSON.stringify(newUser)}`);
});

app.put('/user/:id ', (req,res)=>{
    const userId = parsetInt(req,res) => {
    const {name , email } = req
    }
}