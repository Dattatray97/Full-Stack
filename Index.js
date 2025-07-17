import express from 'express';
import router from './router.js';
import { user, username } from './controll.js';

const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('Hello Express');
});

app.get('/user/:userName', user);
app.get('/search/:user', username);
app.use('/admin', router); // use router middleware for admin routes

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});
