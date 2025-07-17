import express from 'express';

const app = express();
app.use(express.json());

let tasks = [
  { id: 1, title: "Task One", description: "First task", status: "pending" },
  { id: 2, title: "Task Two", description: "Second task", status: "in-progress" }
];
let nextId = 3;

app.get('/tasks', (req, res) => res.send(tasks));

app.get('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);
  task ? res.send(task) : res.status(404).send("Task not found");
});

app.post('/tasks', (req, res) => {
  const { title, description } = req.body;
  const task = { id: nextId++, title, description, status: "pending" };
  tasks.push(task);
  res.send(task);
});

app.put('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);
  if (!task) return res.status(404).send("Task not found");
  const { title, description, status } = req.body;
  if (title) task.title = title;
  if (description) task.description = description;
  if (status) task.status = status;
  res.send(task);
});

app.delete('/tasks/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id == req.params.id);
  if (index === -1) return res.status(404).send("Task not found");
  res.send(tasks.splice(index, 1)[0]);
});

app.listen(3000, () => console.log('Server running on port 3000'));
