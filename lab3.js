import express from 'express';

const app = express();
app.use(express.json());

let books = [
  { id: 1, title: '1984', author: 'George Orwell' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' }
];

app.get('/books', (req, res) => {
  if (!books.length) return res.send('No books available.');
  res.send(books.map(b => `ID: ${b.id}, Title: "${b.title}", Author: ${b.author}`).join('\n'));
});

app.post('/books', (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) return res.status(400).send('Title and author are required.');

  const newBook = { id: books.length ? Math.max(...books.map(b => b.id)) + 1 : 1, title, author };
  books.push(newBook);
  res.send(`Book added: ID ${newBook.id}, Title "${title}", Author ${author}`);
});

app.put('/books/:id', (req, res) => {
  const book = books.find(b => b.id === +req.params.id);
  if (!book) return res.status(404).send('Book not found.');

  const { title, author } = req.body;
  if (title) book.title = title;
  if (author) book.author = author;

  res.send(`Book updated: ID ${book.id}, Title "${book.title}", Author ${book.author}`);
});

app.delete('/books/:id', (req, res) => {
  const index = books.findIndex(b => b.id === +req.params.id);
  if (index === -1) return res.status(404).send('Book not found.');

  const [deleted] = books.splice(index, 1);
  res.send(`Deleted book: ID ${deleted.id}, Title "${deleted.title}", Author ${deleted.author}`);
});

app.listen(3000, () => console.log('Server running on port 3000'));
