const express = require('express');
const router = express.Router();

const alunoController = require('../controllers/alunoController');

router.get('/', alunoController.listarAlunos);

router.post('/', alunoController.cadastrarAluno);

router.put('/:id', alunoController.atualizarAluno);

router.delete('/:id', alunoController.excluirAluno);

module.exports = router;