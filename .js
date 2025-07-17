const express = require('express');
const app = express();
const PORT = 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Route with a dynamic parameter
app.get('/user/:name', (req, res) => {
  const userName = req.params.name;  // Extract the "name" from URL
  res.send(`Hello, ${userName}! Welcome to Express.`);
});
app.get('/product/:id', (req, res) => {
  const productId = req.params.id;
  res.send(`Product ID is: ${productId}`);
});
app.get(`/new`,(req,res)=> {
const 
})


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
