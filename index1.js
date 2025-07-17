import express from 'express';
const app = express();
const port = 3001;

app.set('view engine', 'pug');
// app.use(express.static('public'));

app.get('/', (req, res) => {
    // const userName = "Datta";
    res.render('index1', { title:'Rebeal', message:'Welcome to pug' });
});

app.listen(port, () => {
    console.log(`Student app listening at http://localhost:${port}`);
});
