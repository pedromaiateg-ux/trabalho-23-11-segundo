const express = require('express');
const app = express();

const alunoRoutes = require('./routes/alunoRoutes');
const logMiddleware = require('./middlewares/logMiddleware');

app.use(express.json());

app.use(logMiddleware);

app.get('/', (req, res) => {
    res.send('Sistema de Cadastro de Alunos - SENAI');
});

app.use('/alunos', alunoRoutes);

app.listen(3000, () => {
    console.log('Servidor funcionando na porta 3000');
});