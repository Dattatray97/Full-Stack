import express from 'express';

const app = express();
app.use(express.json());

let products = [
  { id: 1, name: 'Apple', price: 1.0, stock: 10 },
  { id: 2, name: 'Banana', price: 0.5, stock: 20 },
  { id: 3, name: 'Orange', price: 1.2, stock: 15 }
];


app.get('/products', (req, res) => {
  res.json(products);
});


app.get('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});


app.post('/products', (req, res) => {
  const { name, price, stock } = req.body;
  if (!name || price === undefined || stock === undefined) {
    return res.status(400).json({ message: 'Name, price and stock are required' });
  }
  const id = products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;
  const newProduct = { id, name, price, stock };
  products.push(newProduct);
  res.status(201).json({ message: 'Product created', product: newProduct });
});


app.put('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) {
    return res.status(404).json({ message: 'Product does not exist' });
  }

  const { name, price, stock } = req.body;
  if (name !== undefined) product.name = name;
  if (price !== undefined) product.price = price;
  if (stock !== undefined) product.stock = stock;
 
  res.json({ message: 'Product updated', product });
});


app.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }
  const deleted = products.splice(index, 1);
  res.json({ message: 'Product deleted', product: deleted[0] });
});


app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
