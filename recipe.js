import express from 'express';
const app = express();
const port = 3000;

app.set('view engine', 'pug');

app.use(express.static('public'));


app.get('/', (req, res) => {
    const recipe = {
        name: 'Spaghetti Carbonara',
        image: '/image/Chicken.jpg',   
        ingredients: ['Chicken', 'Eggs', 'Masala', 'Black Pepper'],
        steps: [
            'Boil the water',
            'Add the ingredients',
            'Add raw material',
            'Add masala',
            'Boil some time'
        ]
    };

    res.render('recipe', { title: 'Recipe', recipe });
});

app.listen(port, () => {
    console.log(`Server app listening at http://localhost:${port}`);
});
