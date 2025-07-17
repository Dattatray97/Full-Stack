import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

let users = [
  { id: 1, name: 'jude', email: 'jude@gmail.com' },
  { id: 2, name: 'paloto', email: 'palto@gmail.com' },
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).send('Name and email required');
  }

  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, email } = req.body;

  const user = users.find(u => u.id === userId);
  if (!user) {
    return res.status(404).send('User not found');
  }

  if (!name && !email) {
    return res.status(400).send('At least one of name or email must be provided to update');
  }

  if (name) user.name = name;
  if (email) user.email = email;

  res.json(user);
});

app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(user => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).send('User not found');
  }

  const deletedUser = users.splice(userIndex, 1);
  res.json(deletedUser[0]);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
