const express = require('express');
const app = express();
const PORT = 3001;

app.get('/user', (req, res) => {
    res.send('User path is create');
});
app.get('/live', (req, res) => {
    res.send('Live path is create');
});
app.get('/name', (req, res) => {
    res.send('Hello Datta');
});
app.get('/latter', (req, res) => {
    res.send('User path is create but latter');
});

// New route to send all outputs at once
app.get('/all', (req, res) => {
    const combinedOutput = `
        User: User path is create
        Live: Live path is create
        Name: Hello Datta
        Latter: User path is create but latter
    `;
    res.send(combinedOutput);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
