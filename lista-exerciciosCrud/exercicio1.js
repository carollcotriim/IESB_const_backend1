const express = require('express');
const app = express();
const PORT = 3000;

const tasks = [];

// Recuperar todas as tarefas
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// Recuperar uma tarefa específica por ID
app.get('/tasks/:id', (req, res) => {
    const taskId = req.params.id;
    const task = tasks.find(task => task.id === taskId);
    if (!task) {
        res.status(404).send('Tarefa não encontrada');
    } else {
        res.json(task);
    }
});

// Adicionar uma nova tarefa
app.post('/tasks', (req, res) => {
    const newTask = req.body;
    tasks.push(newTask);
    res.status(201).send('Tarefa adicionada com sucesso');
});

// Atualizar uma tarefa existente por ID
app.put('/tasks/:id', (req, res) => {
    const taskId = req.params.id;
    const updatedTask = req.body;
    const index = tasks.findIndex(task => task.id === taskId);
    if (index === -1) {
        res.status(404).send('Tarefa não encontrada');
    } else {
        tasks[index] = updatedTask;
        res.send('Tarefa atualizada com sucesso');
    }
});

// Remover uma tarefa por ID
app.delete('/tasks/:id', (req, res) => {
    const taskId = req.params.id;
    tasks = tasks.filter(task => task.id !== taskId);
    res.send('Tarefa removida com sucesso');
});

app.listen(PORT, () => {
    console.log(`Servidor Express rodando na porta ${PORT}`);
});